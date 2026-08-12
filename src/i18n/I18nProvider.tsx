import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { en } from '../content/en'
import { zh } from '../content/zh'
import type { Content } from '../content/types'

export type Locale = 'en' | 'zh'

const STORAGE_KEY = 'sl-locale'

const dictionaries: Record<Locale, Content> = { en, zh }

interface I18nState {
  locale: Locale
  setLocale: (l: Locale) => void
  toggle: () => void
  t: Content
}

const I18nContext = createContext<I18nState | null>(null)

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null
  if (saved === 'en' || saved === 'zh') return saved
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(detectLocale)

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const toggle = () => setLocale((l) => (l === 'en' ? 'zh' : 'en'))

  return (
    <I18nContext.Provider value={{ locale, setLocale, toggle, t: dictionaries[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nState {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
