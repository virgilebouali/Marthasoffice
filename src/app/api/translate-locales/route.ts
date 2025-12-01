import { NextResponse } from 'next/server';
import fs from 'fs';

const INPUT_PATH = 'public/locales/fr.json';
const OUTPUT_PATH = 'public/locales/en.json';
const DEEPL_KEY = process.env.DEEPL_API_KEY;

async function translateWithDeepL(text: string) {
  const url = process.env.DEEPL_PROD ? 'https://api.deepl.com/v2/translate' : 'https://api-free.deepl.com/v2/translate';
  const params = new URLSearchParams();
  params.append('auth_key', DEEPL_KEY as string);
  params.append('text', text);
  params.append('source_lang', 'FR');
  params.append('target_lang', 'EN');
  const res = await fetch(url, { method: 'POST', body: params });
  if (!res.ok) throw new Error('DeepL error ' + res.statusText);
  const json = await res.json();
  return json.translations[0].text as string;
}

async function translateObject(obj: any): Promise<any> {
  if (typeof obj === 'string') return translateWithDeepL(obj);
  if (Array.isArray(obj)) {
    const out: any[] = [];
    for (const item of obj) out.push(await translateObject(item));
    return out;
  }
  const result: any = {};
  for (const key of Object.keys(obj)) {
    result[key] = await translateObject(obj[key]);
  }
  return result;
}

export async function POST() {
  if (!DEEPL_KEY) return NextResponse.json({ error: 'DEEPL_API_KEY not set' }, { status: 400 });
  if (!fs.existsSync(INPUT_PATH)) return NextResponse.json({ error: 'source fr.json not found' }, { status: 400 });
  const fr = JSON.parse(fs.readFileSync(INPUT_PATH, 'utf8'));
  const en = await translateObject(fr);
  fs.mkdirSync('public/locales', { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(en, null, 2), 'utf8');
  return NextResponse.json({ ok: true, path: OUTPUT_PATH });
}
