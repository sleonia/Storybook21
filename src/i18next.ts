import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEn from '../locales/en.json'

const resources = {
    en: {
        translation: translationEn
    }
}

/* comment: initialization i18next */
/* eslint-disable-next-line @typescript-eslint/no-floating-promises */
i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        saveMissing: true,
        keySeparator: '/'
    })

export default i18next
