import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import uk from './locales/uk.json'
import de from './locales/de.json'
import ko from './locales/ko.json'

const i18n = createI18n({
  legacy: false, 
  locale: 'en', 
  fallbackLocale: 'uk', 
  messages: {
    en,
    uk,
    de,
    ko
  },
})

export default i18n
