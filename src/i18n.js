import i18n from "i18next";
import arSA from "./locales/ar-sa.json";
import daDK from "./locales/da-dk.json";
import deDE from "./locales/de-de.json";
import enUS from "./locales/en-us.json";
import esES from "./locales/es-es.json";
import faIR from "./locales/fa-ir.json";
import fiFI from "./locales/fi-fi.json";
import frFR from "./locales/fr-fr.json";
import heIL from "./locales/he-il.json";
import hiIN from "./locales/hi-in.json";
import itIT from "./locales/it-it.json";
import jaJP from "./locales/ja-jp.json";
import koKR from "./locales/ko-kr.json";
import nbNO from "./locales/nb-no.json";
import ptBR from "./locales/pt-br.json";
import ptPT from "./locales/pt-pt.json";
import ruRU from "./locales/ru-ru.json";
import svSE from "./locales/sv-se.json";
import trTR from "./locales/tr-tr.json";
import ukUA from "./locales/uk-ua.json";
import urUR from "./locales/ur-ur.json";
import viVN from "./locales/vi-vn.json";
import zhCN from "./locales/zh-cn.json";
import plPL from "./locales/pl-pl.json";

const resources = {
  "ar-SA": { translation: arSA },
  "da-DK": { translation: daDK },
  "de-DE": { translation: deDE },
  "en-US": { translation: enUS },
  "es-ES": { translation: esES },
  "fa-IR": { translation: faIR },
  "fi-FI": { translation: fiFI },
  "fr-FR": { translation: frFR },
  "he-IL": { translation: heIL },
  "hi-IN": { translation: hiIN },
  "it-IT": { translation: itIT },
  "ja-JP": { translation: jaJP },
  "ko-KR": { translation: koKR },
  "nb-NO": { translation: nbNO },
  "pt-BR": { translation: ptBR },
  "pt-PT": { translation: ptPT },
  "ru-RU": { translation: ruRU },
  "sv-SE": { translation: svSE },
  "tr-TR": { translation: trTR },
  "uk-UA": { translation: ukUA },
  "ur-UR": { translation: urUR },
  "vi-VN": { translation: viVN },
  "zh-CN": { translation: zhCN },
  "pl-PL": { translation: plPL },
};

export const initI18n = (lng = "en-US") => {
  if (!i18n.isInitialized) {
    i18n.init({
      resources,
      lng,
      fallbackLng: "en-US",
      interpolation: {
        escapeValue: false,
      },
    });
  } else {
    i18n.changeLanguage(lng);
  }
};

export default i18n;
