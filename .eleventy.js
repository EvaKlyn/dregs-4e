const markdownit = require("markdown-it");
const anchor = require("markdown-it-anchor");
const pluginInlineLinkFavicon = require("eleventy-plugin-inline-link-favicon");
const markdown_it_expandable = require("markdown-it-expandable");
const markdown_it = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.setDataDeepMerge(false);
  eleventyConfig.addPlugin(pluginInlineLinkFavicon)
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(require("markdown-it-toc-done-right")));
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdown_it_expandable));
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(require('markdown-it-imsize')));
  return {
    passthroughFileCopy: true
  }
}