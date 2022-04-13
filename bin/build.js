#!/usr/bin/env ts-node

import {promises as fs, readFileSync} from 'node:fs'
import {join} from 'node:path'

const fontFamily = 'Metropolis';

const weights = Object.entries({
	900: 'Black',
	800: 'ExtraBold',
	700: 'Bold',
	600: 'SemiBold',
	500: 'Medium',
	400: 'Regular',
	300: 'Light',
	200: 'ExtraLight',
	100: 'Thin',
});

const unicodeRanges = {
	'cyrillic-ext': ['U+0460-052F', 'U+1C80-1C88', 'U+20B4', 'U+2DE0-2DFF', 'U+A640-A69F', 'U+FE2E-FE2F'],
	'cyrillic': ['U+0400-045F', 'U+0490-0491', 'U+04B0-04B1', 'U+2116'],
	'greek-ext': ['U+1F00-1FFF'],
	'greek': ['U+0370-03FF'],
	'hebrew': ['U+0590-05FF', 'U+200C-2010', 'U+20AA', 'U+25CC', 'U+FB1D-FB4F'],
	'vietnamese': ['U+0102-0103', 'U+0110-0111', 'U+0128-0129', 'U+0168-0169', 'U+01A0-01A1', 'U+01AF-01B0', 'U+1EA0-1EF9', 'U+20AB'],
	'latin-ext': ['U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+2020', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2113', 'U+2C60-2C7F', 'U+A720-A7FF'],
	'latin': ['U+0000-00FF', 'U+0131', 'U+0152-0153', 'U+02BB-02BC', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2000-206F', 'U+2074', 'U+20AC', 'U+2122', 'U+2191', 'U+2193', 'U+2212', 'U+2215', 'U+FEFF', 'U+FFFD']
}

const styles = ['', 'Italic'];
const formats = ['woff', 'woff2'];
const distDir = join(__dirname, '../', 'dist');
const cssPath = join(__dirname, '../');

let css = `
/** ${fontFamily} Webfont CSS © typehaus.org <https://github.com/typehaus> */
`;

const encodeFont = async ({ format = 'woff', weight = 400, style = 'normal' }) => {
  let data = readFileSync(join(distDir, format, `${fontFamily}-${weights[ weight ]}${style}.${format}`));
	return Buffer.from(data).toString('base64');
};

const writeAllCSS = async css => await fs.writeFile(join(cssPath, `index.css`), css, 'utf8');

// const prepForPublish = async () => await fs.readdir(cssPath)
// .then(files => files.forEach(file => fs.unlink(path.join(cssPath, file))));

const formatCSS = ({
	styles = ['', 'Italic'],
	weight = 400,
	formats = ['woff2'],
	encode = false,
	unicodeRange = null,
	display = 'auto'
}) => styles.map(style => `/** typehaus/${fontFamily.toLowerCase()}/${weight}.css */
@font-face {
	src: local('${fontFamily}'), ${formats.map(async format => `
			 url(${!!encode
					? `data:application/font-${format};charset=utf-8;base64,${await encodeFont({ format, weight, style })}`
					: `'./dist/${format}/${fontFamily}-${weightNames[weight] + style}.${format}'`
			 		}) format('${format}')`).join(',')};
	font-family: '${fontFamily}';
	font-style: ${style === 'Italic' ? 'italic' : 'normal'};
	font-weight: ${weight};
	font-display: ${display}${!unicodeRange ? '' : `
	unicode-range: ${unicodeRange.join(', ')};`}
}
`).join('\n')

const main = async () => {
	await fs.mkdir(cssPath, { recursive: true });
	const cssByWeight = {};

	// should we encode it in base64 or source the .woff/.woff2 files?
	const encode = false;
	const display = 'auto';
	const unicodeRange = unicodeRanges['latin'].concat(unicodeRanges['latin-ext']);

	// loop through each weight
	for await (let [weight, weightName] of weights) {
		// and each style (normal, italic)
		cssByWeight[weight] = formatCSS({ styles, weight, formats, encode, unicodeRange, display});
		css += cssByWeight[weight];
		await fs.writeFile(path.join(cssPath, `${weightName}.css`), cssByWeight[weight], 'utf8');
	}
	return css;
};

main()
	.then(writeAllCSS)
	.then(copyDefaultCSS)
	.then(() => console.log('🎉 Formatted and wrote CSS files to ./dist/css!\nPreparing to publish...'))
	// .then(prepForPublish)
	.finally(() => '🚀 🚀 🚀')
