import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import uk from './locales/uk.json'
import de from './locales/de.json'

const i18n = createI18n({
  legacy: false, 
  locale: 'en', 
  fallbackLocale: 'uk', 
  messages: {
    en,
    uk,
    de,
  },
})

export default i18n
