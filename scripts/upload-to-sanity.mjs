import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { basename } from 'path';

const client = createClient({
  projectId: '2voldnur',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01',
});

const IMG_DIR = '/tmp/10-billion-travelers-images';

async function uploadImage(filename) {
  const path = `${IMG_DIR}/${filename}`;
  const buffer = readFileSync(path);
  const ext = filename.split('.').pop();
  const contentType = ext === 'webp' ? 'image/webp' : ext === 'png' ? 'image/png' : 'image/jpeg';
  const asset = await client.assets.upload('image', buffer, { filename, contentType });
  console.log(`  Uploaded: ${filename} -> ${asset._id}`);
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function main() {
  console.log('=== Uploading images to Sanity ===\n');

  // Upload all images we need
  const images = {};
  const toUpload = [
    'bg-homepage.webp', 'bg-mobile.jpeg', 'bg-beach.jpg', 'island-bg.webp', 'about.jpeg',
    '10-Billion-Travelers-button-pic.jpeg',
    'ezgif.com-optiwebp-7.webp', 'ezgif.com-optiwebp-6-150x150.webp',
    'icon2-150x150.webp', 'icon3-150x150.webp',
    'beach.webp', 'beach2.webp', 'beach3.webp',
    'pic1-1024x1024.webp', 'pic2-1024x1024.webp', 'pic3-1024x1024.webp',
    'Kevin-White-1-283x300.jpeg', 'Kevin-White.jpeg',
    '630604fa0a1d0d335693c0d2-150x150.png', '6306053e4548ae342af15010-150x150.png',
    'accredit.webp', 'world-foodtravel-association.webp', 'unwto.webp',
    'footer1.webp', 'bic-office-2-768x420.jpg',
  ];

  for (const f of toUpload) {
    try {
      images[f] = await uploadImage(f);
    } catch (e) {
      console.log(`  FAILED: ${f} - ${e.message}`);
    }
  }

  console.log('\n=== Creating Sanity documents ===\n');

  // Site Settings
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: '10 Billion Travelers',
    location: 'Raleigh, NC',
    businessHours: [
      { _key: 'mf', days: 'Monday–Friday', hours: '9am–5pm' },
      { _key: 'sat', days: 'Saturday', hours: '10am–3pm' },
      { _key: 'sun', days: 'Sunday', hours: 'Closed' },
    ],
    heroImage: images['bg-homepage.webp'] || undefined,
  });
  console.log('  Created: siteSettings');

  // Team Member - Kevin White
  await client.createOrReplace({
    _id: 'kevin-white',
    _type: 'teamMember',
    name: 'Kevin White',
    role: 'Founder',
    quote: "I was born to travel! I've logged over 1 million miles. Before I'm 100 years old there will be 10 Billion people alive. I'll inspire as many travelers as possible!",
    photo: images['Kevin-White-1-283x300.jpeg'] || undefined,
    order: 1,
  });
  console.log('  Created: teamMember (Kevin White)');

  // Features
  const features = [
    { id: 'feat-1', title: 'Amazing Destinations', description: 'Amazing places around the globe to see', icon: images['ezgif.com-optiwebp-6-150x150.webp'], order: 1 },
    { id: 'feat-2', title: 'Great Accommodations', description: 'Type of convenience and easily accessible', icon: images['icon2-150x150.webp'], order: 2 },
    { id: 'feat-3', title: 'Super Fast Booking', description: 'Schedules, rates and reserve your ticket', icon: images['icon3-150x150.webp'], order: 3 },
    { id: 'feat-4', title: 'Friendly Tour Guide', description: 'A perfect guide will be attentive and respectful', icon: images['icon2-150x150.webp'], order: 4 },
  ];
  for (const f of features) {
    await client.createOrReplace({
      _id: f.id, _type: 'feature', title: f.title, description: f.description, icon: f.icon, order: f.order,
    });
    console.log(`  Created: feature (${f.title})`);
  }

  // Gallery Images
  const gallery = [
    { id: 'gal-beach', title: 'Beach', section: 'travel', image: images['beach.webp'], order: 1 },
    { id: 'gal-beach3', title: 'Beach 3', section: 'travel', image: images['beach3.webp'], order: 2 },
    { id: 'gal-beach2', title: 'Beach 2', section: 'travel', image: images['beach2.webp'], order: 3 },
    { id: 'gal-pic1', title: 'Destination 1', section: 'best', image: images['pic1-1024x1024.webp'], order: 1 },
    { id: 'gal-pic2', title: 'Destination 2', section: 'best', image: images['pic2-1024x1024.webp'], order: 2 },
    { id: 'gal-pic3', title: 'Destination 3', section: 'best', image: images['pic3-1024x1024.webp'], order: 3 },
  ];
  for (const g of gallery) {
    await client.createOrReplace({
      _id: g.id, _type: 'galleryImage', title: g.title, section: g.section, image: g.image, order: g.order,
    });
    console.log(`  Created: galleryImage (${g.title})`);
  }

  // FAQs
  const faqs = [
    { id: 'faq-1', question: 'How do I book a consultation?', answer: "Visit our Contact page or click the Email Us button on any page. We'll get back to you within 24 hours to schedule a call.", order: 1 },
    { id: 'faq-2', question: 'What destinations do you specialize in?', answer: 'Kevin has traveled to 26 countries and counting. We specialize in both popular destinations and off-the-beaten-path adventures worldwide.', order: 2 },
    { id: 'faq-3', question: 'Do you offer group travel packages?', answer: 'Yes! We coordinate group travel for corporate retreats, family vacations, and adventure groups of any size.', order: 3 },
  ];
  for (const f of faqs) {
    await client.createOrReplace({
      _id: f.id, _type: 'faq', question: f.question, answer: f.answer, order: f.order,
    });
    console.log(`  Created: faq (${f.question})`);
  }

  console.log('\n=== Done! ===');
}

main().catch(e => { console.error(e); process.exit(1); });
