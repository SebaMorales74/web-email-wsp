import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imageFolderPath = path.join(process.cwd(), 'public/imagenes_proyecto');
  const imageFiles = fs.readdirSync(imageFolderPath).filter((file) => file.match(/\.(jpg|jpeg|png|gif)$/i));

  res.status(200).json({ imageFiles });
}