export default {
	name: "feature",
	title: "Features",
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
			type: "string",
		},
		{
			name: "icon",
			title: "Icon Image",
			type: "image",
			description: "Small icon (80x80px recommended)",
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
		select: { title: "title", media: "icon" },
	},
};
