module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.setDataDeepMerge(false);
    return {
      passthroughFileCopy: true
    }
  }