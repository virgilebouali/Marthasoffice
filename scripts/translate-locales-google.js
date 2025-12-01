const fs = require('fs');
const path = require('path');
const translate = require('@vitalets/google-translate-api');

const INPUT_PATH = path.join(__dirname, '..', 'public', 'locales', 'fr.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'locales', 'en.json');

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function translateValue(text) {
  if (!text || typeof text !== 'string') return text;
  try {
    const res = await translate(text, { from: 'fr', to: 'en' });
    return res.text;
  } catch (e) {
    console.error('Error translating:', text.slice(0, 60), e.message || e);
    return text;
  }
}

async function translateObject(obj) {
  if (typeof obj === 'string') return translateValue(obj);
  if (Array.isArray(obj)) {
    const out = [];
    for (const v of obj) {
      out.push(await translateObject(v));
      await delay(150);
    }
    return out;
  }
  const out = {};
  for (const k of Object.keys(obj)) {
    out[k] = await translateObject(obj[k]);
    await delay(120);
  }
  return out;
}

async function main() {
  if (!fs.existsSync(INPUT_PATH)) {
    console.error('Input file not found:', INPUT_PATH);
    process.exit(1);
  }
  const fr = JSON.parse(fs.readFileSync(INPUT_PATH, 'utf8'));
  console.log('Loaded', INPUT_PATH);
  const en = await translateObject(fr);
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(en, null, 2), 'utf8');
  console.log('Wrote', OUTPUT_PATH);
}

main().catch((e) => { console.error(e); process.exit(1); });
