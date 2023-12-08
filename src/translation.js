import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from './translations/en.json'
import hyJson from './translations/hy.json'
const resources = {
    en: {
        translation: {
            ...enJson
        }
    },
    hy: {
        translation: {
           ...hyJson
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;