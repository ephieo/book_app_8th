import fs from 'fs';

export default function mockScript() {
  if (!fs.existsSync('./testFolder')) {
    console.log('Folder not found');
  } else {
    console.log('Folder Found');
  }
}
