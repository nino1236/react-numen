const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'node_modules', 'fdir', 'dist', 'index.mjs');
const content = `import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mod = require('./index.cjs');
export const fdir = mod.fdir || mod;
export default mod;
`;

try {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  // write only if missing or different
  if (!fs.existsSync(filePath) || fs.readFileSync(filePath, 'utf8') !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('fix-fdir: wrote wrapper to', filePath);
  } else {
    console.log('fix-fdir: wrapper already present');
  }
} catch (err) {
  console.error('fix-fdir: error', err);
  process.exit(1);
}