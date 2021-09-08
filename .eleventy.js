const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("src/images");

  // Watch sass folder for changes
  eleventyConfig.addWatchTarget("./_src/scss/");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
