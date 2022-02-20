import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../local/language/en.json'
import tw from '../local/language/zh-TW.json'

const resources = {
  en: {
    translation: en
  },
  'zh-TW': {
    translation: tw
  }
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'zh-TW',
  resources,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
