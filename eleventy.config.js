import { IdAttributePlugin } from "@11ty/eleventy"

export default async function(eleventyConfig) {
    // Folders
    eleventyConfig.setInputDirectory("_templates/*.md");
    eleventyConfig.setLayoutsDirectory("../_layouts/");
    eleventyConfig.setOutputDirectory(".");
    
    eleventyConfig.addWatchTarget("./src/*.js")
    eleventyConfig.addWatchTarget("./styles/*.css")
    eleventyConfig.addWatchTarget("./index.html")
    
    // Plugins
    eleventyConfig.addPlugin(IdAttributePlugin);
};


