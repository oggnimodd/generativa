const promisify = require('util').promisify;

// Importing File System module
const fs = require('fs');

// Use promisify to convert callback
// based method fs.readdir to
// promise based method
const readdir = promisify(fs.readdir);
const sizeOf = promisify(require('image-size'));

const generateShowcases = async () => {
  const showcasesFolder = 'public/showcases-png';

  const files = await readdir(showcasesFolder);

  const images = await files.map(async (name) => {
    const { err, type, ...dimensions } = await sizeOf(`${showcasesFolder}/${name}`);
    return { ...dimensions, name: name.split('.')[0] };
  });

  fs.writeFileSync('src/constants/showcases.json', JSON.stringify(await Promise.all(images)), 'utf-8');
};

generateShowcases();
