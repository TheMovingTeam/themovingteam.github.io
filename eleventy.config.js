import { IdAttributePlugin } from "@11ty/eleventy"

export default async function(eleventyConfig) {
    // Folders
    eleventyConfig.setInputDirectory("pages/*.md");
    eleventyConfig.setLayoutsDirectory("../_layouts/");
    eleventyConfig.setOutputDirectory("./_build");

    eleventyConfig.addPassthroughCopy("./src/*")
    eleventyConfig.addPassthroughCopy("./styles/*")
    eleventyConfig.addPassthroughCopy("./media/*")
    eleventyConfig.addPassthroughCopy("./media/screenshots/*")
    
    eleventyConfig.addWatchTarget("./src/*.js")
    eleventyConfig.addWatchTarget("./styles/*.css")
    eleventyConfig.addWatchTarget("./index.html")
    
    // Plugins
    eleventyConfig.addPlugin(IdAttributePlugin);
};


