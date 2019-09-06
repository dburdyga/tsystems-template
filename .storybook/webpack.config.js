const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader', 'sass-resources-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // Return the altered config
  return config;
};

//
// const path = require("path");
//
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         loaders: [
//           "style-loader",
//           "css-loader",
//           "sass-loader",
//           {
//             loader: "sass-resources-loader",
//             options: {
//               resources: [
//                 "src/common/vue-telekom/styles/base/variables.scss",
//                 "src/common/vue-telekom/styles/utilities/mixins.scss",
//               ]
//             },
//           },
//         ],
//         include: path.resolve(__dirname, "../")
//       }
//     ]
//   }
// };
