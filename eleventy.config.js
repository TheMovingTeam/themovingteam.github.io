import { IdAttributePlugin } from "@11ty/eleventy"
import { minify } from "terser";

export default async function(eleventyConfig) {
    // Folders
    eleventyConfig.setInputDirectory("pages/*.md");
    eleventyConfig.setLayoutsDirectory("../_layouts/");
    eleventyConfig.setOutputDirectory("./_build");

    // eleventyConfig.addPassthroughCopy("./styles/*")
    eleventyConfig.addPassthroughCopy("./media/*")
    eleventyConfig.addPassthroughCopy("./media/screenshots/*")

    eleventyConfig.addWatchTarget("./src/*.js")
    eleventyConfig.addWatchTarget("./styles/*.css")
    eleventyConfig.addWatchTarget("./index.html")

    // Plugins
    eleventyConfig.addPlugin(IdAttributePlugin);

    eleventyConfig.addFilter("jsmin", async function(code) {
        try {
            const minified = await minify(code);
            return minified.code;
        } catch (err) {
            console.error("Terser error: ", err);
            // Fail gracefully.
            return code;
        }
    });
};

