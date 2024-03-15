const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg" && ext !== "ttf"), // Exclude both SVG and TTF if needed
    sourceExts: [...sourceExts, "svg", "ttf"] // Include SVG and TTF in source extensions
  }
};

module.exports = mergeConfig(defaultConfig, config);
