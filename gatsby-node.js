const path = require("path");

// exports.createPages = ({ actions }) => {
// 	// place to fetch some data;

// 	actions.createPage({
// 		path: "/product",
// 		component: require.resolve('./src/templates/product.js'),
// 		context: { data: "some response data"}
// 	})

// };

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@fonts": path.resolve(__dirname, "src/fonts"),
        "@scss": path.resolve(__dirname, "src/scss"),
        "@images": path.resolve(__dirname, "src/images"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@templates": path.resolve(__dirname, "src/templates"),
        "@components": path.resolve(__dirname, "src/components"),
        "@subcomponents": path.resolve(
          __dirname,
          "src/components/_subcomponents"
        ),
      },
    },
  });
};
