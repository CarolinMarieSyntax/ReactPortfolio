const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/gallery');
const manifestPath = path.join(__dirname, '../public/gallery/manifest.json');

// Read all image files from the gallery directory
const files = fs.readdirSync(galleryDir)
  .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
  .sort()
  .map(file => `/gallery/${file}`);

// Generate manifest
const manifest = {
  images: files,
  lastUpdated: new Date().toISOString(),
  count: files.length
};

// Write manifest file
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log(`✅ Gallery manifest generated: ${files.length} images found`);
console.log(`📝 Manifest saved to: ${manifestPath}`);



