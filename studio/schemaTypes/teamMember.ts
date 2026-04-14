export default {
	name: "teamMember",
	title: "Team Members",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "role",
			title: "Role",
			type: "string",
		},
		{
			name: "bio",
			title: "Bio",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "quote",
			title: "Quote",
			type: "text",
			description: "Featured quote displayed at top of bio",
		},
		{
			name: "photo",
			title: "Photo",
			type: "image",
			options: { hotspot: true },
			fields: [
				{ name: "alt", title: "Alt Text", type: "string" },
				{ name: "caption", title: "Caption", type: "string" },
			],
		},
		{
			name: "order",
			title: "Order",
			type: "number",
		},
	],
	preview: {
		select: { title: "name", subtitle: "role", media: "photo" },
	},
};
