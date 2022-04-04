#!/usr/bin/env node
const fs = require('fs/promises');
const { readFileSync } = require('fs');
const path = require('path');

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

const styles = ['', 'Italic'];
const formats = ['woff', 'woff2'];
const cssPath = path.join(__dirname, '../', 'dist', 'css');

let css = `
/**
 * Metropolis Webfont CSS - autogenerated stylsheet
 * MIT © typehaus.org <https://github.com/typehaus>
 */
`;

const main = async () => {
	await fs.mkdir(cssPath, { recursive: true });
	const cssByWeight = {};
	let encoded;
	for await (let [weight, weightName] of weights) {
		cssByWeight[weight] = styles
			.map(
				style => `
/* Metropolis ${weightName}${style ? ' ' + style : ''} (${weight}) */
@font-face {
	font-family: 'Metropolis';
	font-style: ${style === 'Italic' ? 'italic' : 'normal'};
	font-weight: ${weight};
	src: local('Metropolis'),
			 ${formats
					.map(
						format => (
							(encoded = Buffer.from(
								readFileSync(`${__dirname}/../dist/${format}/Metropolis-${weightName}${style}.${format}`)
							).toString('base64')),
							`url(data:font/${format};charset=utf-8;base64,${encoded}) format('${format}')`
						)
					)
					.join(',\n       ')};
}`
			)
			.join('\n');
		css += cssByWeight[weight];
		await fs.writeFile(path.join(cssPath, `${weightName}.css`), cssByWeight[weight], 'utf8');
	}
	return css;
};
main()
	.then(async css => await fs.writeFile(path.join(cssPath, 'metropolis.css'), css, 'utf8'))
	.finally(() => console.log('CSS built and written to ./dist/css!'));
