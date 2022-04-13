declare module '@typehaus/metropolis' {
	const content: any;
	export default content;
}

declare module '*.css' {
	const content: { [className: string]: any } & any;
	export default content;
}

declare module '@typehaus/metropolis/*.css' {
  const content: { [className: string]: any } & any;
  export default content;
}
