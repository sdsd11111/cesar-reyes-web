const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const convertToWebP = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Converted: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
};

const processDirectory = async (dirPath) => {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      if (!fs.existsSync(webpPath)) {
        await convertToWebP(filePath, webpPath);
      }
    }
  }
};

// Process public directory
processDirectory(path.join(__dirname, '../public'))
  .then(() => console.log('Conversion complete!'))
  .catch(console.error);
