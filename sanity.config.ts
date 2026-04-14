import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { schemaTypes } from "./studio/schemaTypes";

export default defineConfig({
	name: "10-billion-travelers",
	title: "10 Billion Travelers",
	projectId: "2voldnur",
	dataset: "production",
	basePath: "/studio",
	plugins: [structureTool(), media()],
	schema: { types: schemaTypes },
});
