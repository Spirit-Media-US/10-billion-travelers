export default {
	name: "galleryImage",
	title: "Gallery Images",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			validation: (Rule: any) => Rule.required(),
			fields: [{ name: "alt", title: "Alt Text", type: "string" }],
		},
		{
			name: "section",
			title: "Gallery Section",
			type: "string",
			options: {
				list: [
					{ title: "Travel Photos", value: "travel" },
					{ title: "Best Travel", value: "best" },
				],
			},
			validation: (Rule: any) => Rule.required(),
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
		select: { title: "title", subtitle: "section", media: "image" },
	},
};
