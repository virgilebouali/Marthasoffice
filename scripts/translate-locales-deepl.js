const fs = require('fs');
const fetch = require('node-fetch');

const INPUT_PATH = 'public/locales/fr.json';
const OUTPUT_PATH = 'public/locales/en.json';
const API_KEY = process.env.DEEPL_API_KEY;
const API_URL = process.env.DEEPL_PROD ? 'https://api.deepl.com/v2/translate' : 'https://api-free.deepl.com/v2/translate';

if (!API_KEY) {
  console.error('DEEPL_API_KEY not set in environment.');
  process.exit(1);
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

async function translateText(text) {
  if (!text || typeof text !== 'string') return text;
  const params = new URLSearchParams();
  params.append('auth_key', API_KEY);
  params.append('text', text);
  params.append('source_lang', 'FR');
  params.append('target_lang', 'EN');

  const res = await fetch(API_URL, { method: 'POST', body: params });
  if (!res.ok) {
    const body = await res.text();
    throw new Error('DeepL error: ' + res.status + ' ' + body.slice(0, 200));
  }
  const json = await res.json();
  return json.translations[0].text;
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

main().catch(e => { console.error(e); process.exit(1); });
