const withCss = require('@zeit/next-css')
const webpack = require('webpack')

// fix: prevents error when .css files are required by node
// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
	require.extensions['.css'] = file => {}
}

//
module.exports = withCss({
	webpack(config, options) {
		return config
	},
})
