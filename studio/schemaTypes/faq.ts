export default {
	name: "faq",
	title: "FAQs",
	type: "document",
	fields: [
		{
			name: "question",
			title: "Question",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "answer",
			title: "Answer",
			type: "text",
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
		select: { title: "question" },
	},
};
