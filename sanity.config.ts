import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';

export default defineConfig({
  name: '10-billion-travelers',
  title: '10 Billion Travelers',
  projectId: '2voldnur',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool(), media()],
  schema: {
    types: [
      {
        name: 'siteSettings',
        type: 'document',
        title: 'Site Settings',
        fields: [
          { name: 'siteName', type: 'string', title: 'Site Name' },
          { name: 'tagline', type: 'string', title: 'Tagline' },
          { name: 'logo', type: 'image', title: 'Header Logo', options: { hotspot: true } },
          { name: 'footerLogo', type: 'image', title: 'Footer Logo', options: { hotspot: true } },
          { name: 'phone', type: 'string', title: 'Phone Number' },
          { name: 'email', type: 'string', title: 'Email Address' },
          { name: 'location', type: 'string', title: 'Location' },
          { name: 'businessHours', type: 'text', title: 'Business Hours' },
          {
            name: 'socialLinks',
            type: 'object',
            title: 'Social Media Links',
            fields: [
              { name: 'facebook', type: 'url', title: 'Facebook' },
              { name: 'twitter', type: 'url', title: 'Twitter / X' },
              { name: 'youtube', type: 'url', title: 'YouTube' },
              { name: 'instagram', type: 'url', title: 'Instagram' },
            ],
          },
        ],
      },
      {
        name: 'teamMember',
        type: 'document',
        title: 'Team Member',
        fields: [
          { name: 'name', type: 'string', title: 'Name' },
          { name: 'role', type: 'string', title: 'Role' },
          { name: 'photo', type: 'image', title: 'Photo', options: { hotspot: true } },
          { name: 'photoCaption', type: 'string', title: 'Photo Caption' },
          { name: 'bio', type: 'array', title: 'Biography', of: [{ type: 'block' }] },
          { name: 'tagline', type: 'text', title: 'Tagline / Intro Quote' },
        ],
      },
      {
        name: 'service',
        type: 'document',
        title: 'Service',
        fields: [
          { name: 'title', type: 'string', title: 'Service Title' },
          { name: 'description', type: 'text', title: 'Description' },
          { name: 'image', type: 'image', title: 'Service Image', options: { hotspot: true } },
          { name: 'imageAlt', type: 'string', title: 'Image Alt Text' },
          { name: 'order', type: 'number', title: 'Display Order' },
        ],
      },
      {
        name: 'galleryImage',
        type: 'document',
        title: 'Gallery Image',
        fields: [
          { name: 'title', type: 'string', title: 'Title' },
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: { hotspot: true },
          },
          { name: 'alt', type: 'string', title: 'Alt Text' },
          {
            name: 'section',
            type: 'string',
            title: 'Section',
            options: {
              list: [
                { title: 'Hero Background', value: 'hero' },
                { title: 'Travel Photos', value: 'travel' },
                { title: 'Best Travel', value: 'best' },
                { title: 'Feature Icon', value: 'icon' },
              ],
            },
          },
          { name: 'order', type: 'number', title: 'Display Order' },
        ],
      },
    ],
  },
});
