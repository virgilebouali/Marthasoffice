const fs = require('fs');
const fetch = require('node-fetch');

const SOURCE = 'fr';
const TARGET = 'en';
const INPUT_PATH = 'public/locales/fr.json';
const OUTPUT_PATH = 'public/locales/en.json';
const APIS = [
  'https://libretranslate.com/translate',
  'https://libretranslate.de/translate',
  'https://translate.argosopentech.com/translate'
];

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function translateText(text) {
  if (!text || typeof text !== 'string') return text;
  for (const API of APIS) {
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: text, source: SOURCE, target: TARGET, format: 'text' }),
      });
      const body = await res.text();
      try {
        const json = JSON.parse(body);
        if (json && json.translatedText) return json.translatedText;
      } catch (e) {
        // not json, try next endpoint
      }
    } catch (e) {
      // try next endpoint
    }
    // small delay between endpoints
    await delay(300);
  }
  console.error('All translation endpoints failed for text start:', String(text).slice(0,60));
  return text;
}

async function translateObject(obj) {
  if (typeof obj === 'string') return translateText(obj);
  if (Array.isArray(obj)) {
    const out = [];
    for (const item of obj) {
      out.push(await translateObject(item));
      await delay(200);
    }
    return out;
  }

  const result = {};
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (typeof val === 'string') {
      result[key] = await translateText(val);
      // small delay to be gentle with public API
      await delay(250);
    } else {
      result[key] = await translateObject(val);
    }
  }
  return result;
}

async function main() {
  if (!fs.existsSync(INPUT_PATH)) {
    console.error('Input file not found:', INPUT_PATH);
    process.exit(1);
  }
  const fr = JSON.parse(fs.readFileSync(INPUT_PATH, 'utf8'));
  console.log('Loaded', INPUT_PATH);
  const en = await translateObject(fr);
  fs.mkdirSync('public/locales', { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(en, null, 2), 'utf8');
  console.log('Wrote', OUTPUT_PATH);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
