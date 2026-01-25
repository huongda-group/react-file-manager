import {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";
import i18n, { initI18n } from "../i18n";
import { TFunction } from "i18next";

const I18nContext = createContext<TFunction>(i18n.t);

interface TranslationProviderProps extends PropsWithChildren {
  language: string;
}

export const TranslationProvider = ({
  children,
  language,
}: TranslationProviderProps) => {
  const [t, setT] = useState<TFunction>(() => i18n.t.bind(i18n));

  useEffect(() => {
    initI18n(language);
    setT(() => i18n.t.bind(i18n));
  }, [language]);

  return <I18nContext.Provider value={t}>{children}</I18nContext.Provider>;
};

export const useTranslation = (): TFunction => useContext(I18nContext);
