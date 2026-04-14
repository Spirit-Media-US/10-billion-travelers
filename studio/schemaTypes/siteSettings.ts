export default {
	name: "siteSettings",
	title: "Site Settings",
	type: "document",
	fields: [
		{
			name: "siteName",
			title: "Site Name",
			type: "string",
			initialValue: "10 Billion Travelers",
		},
		{
			name: "location",
			title: "Location",
			type: "string",
			initialValue: "Raleigh, NC",
		},
		{
			name: "businessHours",
			title: "Business Hours",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "days", title: "Days", type: "string" },
						{ name: "hours", title: "Hours", type: "string" },
					],
				},
			],
		},
		{
			name: "heroImage",
			title: "Hero Background Image",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt Text", type: "string" }],
		},
	],
	preview: {
		prepare() {
			return { title: "Site Settings" };
		},
	},
};
