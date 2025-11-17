import { IdAttributePlugin } from "@11ty/eleventy"
import { minify } from "terser";
import YAML from "yaml";

export default async function(eleventyConfig) {
    // Folders
    eleventyConfig.setInputDirectory("pages/*.md");
    eleventyConfig.setLayoutsDirectory("../layouts/");
    eleventyConfig.setDataDirectory("../data/")
    eleventyConfig.setOutputDirectory("./_build");

    eleventyConfig.addPassthroughCopy("./media/")

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

    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents))
};

