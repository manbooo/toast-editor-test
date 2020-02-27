module.exports = api => {
	api.cache(true)
	const presets = ['next/babel']

	const plugins = [
		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true,
			},
		],
		["@babel/plugin-syntax-dynamic-import"],
		['@babel/plugin-proposal-optional-chaining'],
		[
			'import',
			{
				libraryName: 'antd',
				style: false,
			},
		],
	]

	return {
		presets,
		plugins,
	}
}
