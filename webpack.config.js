const unplugin = require("unplugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    unplugin
      .createUnplugin(() => {
        return {
          name: "my-plugin",
          load() {
            console.log("plugin-load");
          },
          transform() {
            console.log("plugin-transform");
          },
          buildStart() {
            console.log("plugin-build-start");
          },
        };
      })
      .webpack(),
  ],
};
