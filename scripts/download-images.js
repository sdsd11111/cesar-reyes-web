const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://automatizotunegocio.net/wp-content/uploads/2025/03/Confianza.jpg',
    filename: 'confianza.jpg'
  },
  {
    url: 'https://automatizotunegocio.net/wp-content/uploads/2025/03/Dr.-Patricio-Reyes-Polit-Santo-Domingo.jpg',
    filename: 'dr-patricio.jpg'
  },
  {
    url: 'https://topdentcuenca.com/wp-content/uploads/2025/02/DSC09751-1.png.webp',
    filename: 'topdent.jpg'
  },
  {
    url: 'https://drguidodiazortega.com/imagenes/fotodeperfilguidodiaz.jpg',
    filename: 'dr-guido.jpg'
  },
  {
    url: 'https://automatizotunegocio.net/wp-content/uploads/2025/03/Imagen-de-WhatsApp-2025-02-06-a-las-09.53.41_e131afce.jpg',
    filename: 'dr-patricio-2.jpg'
  },
  {
    url: 'https://cesarreyesjaramillo.com/wp-content/uploads/2025/01/Cesar-Reyes-Asesorando-un-Restaurante-de-Loja-1.jpg',
    filename: 'cesar-reyes.jpg'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '..', 'public', 'images', 'maspacientes', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Failed to download ${image.filename}`);
    }
  }
};

downloadAllImages().then(() => {
  console.log('All images downloaded successfully');
}).catch((error) => {
  console.error('Error downloading images:', error);
}); 