import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// TODO: Replace with actual 10 Billion Travelers Sanity project ID when created
export const sanityClient = createClient({
  projectId: '2voldnur',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = createImageUrlBuilder(sanityClient);
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
