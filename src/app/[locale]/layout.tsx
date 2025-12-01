import React from 'react'
import { LanguageProvider } from '../LanguageContext'
import fs from 'fs'
import path from 'path'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const supported = ['en', 'fr']
  const { locale } = await params
  const lang = supported.includes(locale) ? locale : 'fr'

  // Try to read pre-generated translations on the server and pass them to the client provider
  let initialTranslations = {}
  try {
    const file = path.join(process.cwd(), 'public', 'locales', `${lang}.json`)
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, 'utf8')
      initialTranslations = JSON.parse(raw)
    }
  } catch (e) {
    // ignore; client will fetch fallback
    console.error('Could not load server translations for', lang, e)
  }

  return (
    <LanguageProvider initialLanguage={lang} initialTranslations={initialTranslations}>
      {children}
    </LanguageProvider>
  )
}
