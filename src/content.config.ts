import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// The canonical documents live at the repository root, next to the site code.
// The site renders them; it never rewrites them.
const docs = defineCollection({
  loader: glob({
    pattern: ["CODE.md", "CHARTER.md", "COMMENTARY.md"],
    base: ".",
  }),
});

export const collections = { docs };
