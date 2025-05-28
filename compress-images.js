const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const assetsDir = path.join(__dirname, 'public', 'assets');
const files = fs.readdirSync(assetsDir)
  .filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'));

files.forEach(file => {
  try {
    const filePath = path.join(assetsDir, file);
    const command = `sharp -i "${filePath}" -o "${filePath}" --quality 65 resize 1500`;
    
    console.log(`\nProcessing: ${file}`);
    console.log(`Running: ${command}`);
    
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});