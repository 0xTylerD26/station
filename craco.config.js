module.exports = {
	webpack: {
		configure: (webpackConfig) => {
			webpackConfig.entry = "./src/index.tsx";
			webpackConfig.resolve.fallback = {
				"crypto": require.resolve('crypto-browserify'),
				"vm": require.resolve("vm-browserify")
				// Add other fallbacks if needed
			};
			webpackConfig.module.rules.push({
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
                exclude: [
                    /node_modules\/@terra-money\//
                ],
            });
			return webpackConfig;
		},
	},
	resolve: {
		fallback: {
		  "crypto": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
		} 
	  },
};
