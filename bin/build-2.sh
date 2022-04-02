#!/bin/bash
set -ex

BASEDIR="$(dirname "${BASH_SOURCE[0]}")"
cd "$BASEDIR"

OUTPUT_DIR="$BASEDIR/build"
SOURCE_DIR="$BASEDIR/src"

rm -rf "$OUTPUT_DIR"

function glyphs2ttf () {
  local glyphs ttf
  glyphs="${1-}"
  ttf="${OUTPUT_DIR-}/ttf/$(basename -- "${glyphs/.glyphs/.ttf}")"

  fontmake -g "${glyphs-}" -o ttf -i --output-dir "$(dirname -- "$ttf")";

  gftools fix-nonhinting "${ttf-}" "${ttf-}"
  gftools fix-dsig "${ttf-}" --autofix
}

for glyph in "$SOURCE_DIR/"*".glyphs"; do
  glyphs2ttf "${glyph-}"
done

  for font in "$OUTPUT_DIR/ttf/"*".ttf"; do
    gftools fix-nonhinting $font $font
    gftools fix-dsig $font --autofix
  done
}

# Cleanup gftools mess:
rm -f "$OUTPUT_DIR/ttf/"*"-backup-fonttools-prep-gasp.ttf"

# Do not report progress.
# export OPTIONS="--no-progress"

# We lack this on Travis. (what about GitHub Actions?)
export OPTIONS="$OPTIONS --exclude-checkid /check/ftxvalidator"

# cp METADATA.pb "$OUTPUT_DIR"
# Comment this out after creating a METADATA.pb file
export OPTIONS="$OPTIONS --exclude-checkid /check/metadata"

# cp DESCRIPTION.*.html "$OUTPUT_DIR"
# Comment this out after creating a DESCRIPTION.en_us.html file.
export OPTIONS="$OPTIONS --exclude-checkid /check/description"

# Comment this out when making a variable font.
export OPTIONS="$OPTIONS --exclude-checkid /check/varfont" 

# Set log level to INFO
export OPTIONS="$OPTIONS --loglevel INFO"

# Generate markdown results file (in GFM)
export OPTIONS="$OPTIONS --ghmarkdown fontbakery-check-results.md"

# Check it!
fontbakery check-googlefonts "$OPTIONS" "$OUTPUT_DIR/ttf/"*".ttf"

cd -

