export default {
	name: "service",
	title: "Services",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "description",
			title: "Description",
			type: "text",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt Text", type: "string" }],
		},
		{
			name: "order",
			title: "Display Order",
			type: "number",
		},
	],
	orderings: [
		{
			title: "Display Order",
			name: "orderAsc",
			by: [{ field: "order", direction: "asc" }],
		},
	],
	preview: {
		select: { title: "title", media: "image" },
	},
};
