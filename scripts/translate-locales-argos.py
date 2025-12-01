#!/usr/bin/env python3
"""
Translate `public/locales/fr.json` -> `public/locales/en.json` using Argos Translate (local, open-source).

Usage:
  pip install argostranslate
  # download FR->EN package from Argos OpenTech and install it (see message below)
  python scripts/translate-locales-argos.py

If argostranslate or the FR->EN package is not installed, the script prints instructions.
"""
import json
from pathlib import Path
import sys

INPUT = Path('public/locales/fr.json')
OUTPUT = Path('public/locales/en.json')

def translate_object(obj, translator):
    if isinstance(obj, str):
        return translator(obj)
    if isinstance(obj, list):
        return [translate_object(i, translator) for i in obj]
    if isinstance(obj, dict):
        out = {}
        for k, v in obj.items():
            out[k] = translate_object(v, translator)
        return out
    return obj

def main():
    if not INPUT.exists():
        print('Input file not found:', INPUT)
        sys.exit(1)

    try:
        from argostranslate import package, translate
    except Exception as e:
        print('argostranslate not installed. Install with:')
        print('  pip install argostranslate')
        print('\nSee https://github.com/argosopentech/argos-translate for details.')
        sys.exit(1)

    installed_langs = translate.load_installed_languages()
    # Find a translator function fr->en
    translator = None
    for from_lang in installed_langs:
        if from_lang.code == 'fr':
            for to_lang in installed_langs:
                if to_lang.code == 'en':
                    # Check if there is a translation between these two
                    for trans in from_lang.translations:
                        if trans.to_lang.code == 'en':
                            translator = trans.translate
                            break
                if translator:
                    break
        if translator:
            break

    if translator is None:
        print('No FR->EN translation installed for argostranslate.')
        print('You can download the FR->EN package from Argos OpenTech and install it locally:')
        print('  1) Visit https://www.argosopentech.com/ and locate the FR->EN .argosmodel package')
        print('  2) Download the .argosmodel file, e.g. translate-fr_en.argosmodel')
        print('  3) Install it with (example):')
        print('     python -c "from argostranslate import package; package.install_from_path(\'path/to/translate-fr_en.argosmodel\')"')
        print('After installation, re-run this script.')
        sys.exit(1)

    data = json.loads(INPUT.read_text(encoding='utf8'))
    print('Loaded', INPUT)
    out = translate_object(data, translator)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf8')
    print('Wrote', OUTPUT)

if __name__ == '__main__':
    main()
