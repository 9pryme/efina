require('./load-env');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Verify credentials are loaded
if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET || !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
  console.error('Missing Cloudinary credentials');
  process.exit(1);
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

const publicDir = path.join(process.cwd(), 'public', 'images');

async function uploadDirectory(directory: string): Promise<void> {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await uploadDirectory(filePath);
    } else {
      const publicPath = filePath.replace(publicDir, '').replace(/\\/g, '/');
      const cloudinaryPath = publicPath.replace(/\.[^/.]+$/, ''); // Remove file extension

      try {
        console.log(`Uploading ${publicPath} to Cloudinary...`);
        await cloudinary.uploader.upload(filePath, {
          public_id: cloudinaryPath.slice(1), // Remove leading slash
          overwrite: true,
          resource_type: 'auto'
        });
        console.log(`Successfully uploaded ${publicPath}`);
      } catch (error) {
        console.error(`Failed to upload ${publicPath}:`, error);
      }
    }
  }
}

uploadDirectory(publicDir).then(() => {
  console.log('Upload complete!');
}).catch((error: Error) => {
  console.error('Upload failed:', error);
}); 