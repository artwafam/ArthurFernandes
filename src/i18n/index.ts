import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import pt from './locales/pt.json'
import ja from './locales/ja.json'
import sv from './locales/sv.json'

const saved = localStorage.getItem('locale')
const browserLang = navigator.language.slice(0, 2)
const supported = ['en', 'pt', 'ja', 'sv'] as const
const initial = saved && supported.includes(saved as (typeof supported)[number])
  ? saved
  : supported.includes(browserLang as (typeof supported)[number])
    ? browserLang
    : 'en'

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, pt: { translation: pt }, ja: { translation: ja }, sv: { translation: sv } },
  lng: initial,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
