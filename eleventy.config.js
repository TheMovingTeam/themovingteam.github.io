import { IdAttributePlugin } from "@11ty/eleventy"
import { minify } from "terser";
import YAML from "yaml";
import { format } from "date-fns"

export default async function(eleventyConfig) {
    // Folders
    eleventyConfig.setInputDirectory("pages/");

    eleventyConfig.addPassthroughCopy("./media/")
    eleventyConfig.addPassthroughCopy("./robots.txt")

    eleventyConfig.addWatchTarget("./pages/**/*")

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

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!-- excerpt -->",
    });

    eleventyConfig.addFilter("firstWord", (str) => {
        return str.split(" ")[0]
    });
    
    eleventyConfig.addFilter('date', function(date, dateFormat) {
        return format(date, dateFormat)
    });

    eleventyConfig.addFilter("head", (arr, num) => {
        return num ? arr.slice(0, num) : arr;
    });

    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents))
};

