const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  'public/image2.png',
  'public/logo.png',
  'public/step1.png',
  'public/step2.png',
  'public/step3.png',
];

async function convertToWebp(imagePath) {
  try {
    const webpPath = imagePath.replace('.png', '.webp');
    await sharp(imagePath)
      .webp({ quality: 80 })
      .toFile(webpPath);
    console.log(`Converted ${imagePath} to ${webpPath}`);
  } catch (error) {
    console.error(`Error converting ${imagePath}:`, error);
  }
}

async function main() {
    for (const image of images) {
        if (fs.existsSync(image)){
            await convertToWebp(image);
        } else {
            console.error(`File ${image} does not exist`);
        }
    }
}
main();