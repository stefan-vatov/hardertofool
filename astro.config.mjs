// @ts-check
import { defineConfig } from "astro/config";

// Static output, no adapter, no integrations. Everything else is hand-rolled:
// sitemap.xml, robots.txt, llms.txt live in public/; SEO/OG/JSON-LD in BaseLayout.
export default defineConfig({
  site: "https://hardertofool.org",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file",
    inlineStylesheets: "never",
  },
  vite: {
    // The extensionless LICENSE file is imported with ?raw; without this,
    // dev-mode import analysis tries to parse it as JavaScript.
    assetsInclude: ["**/LICENSE"],
  },
});
