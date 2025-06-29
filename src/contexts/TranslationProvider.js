import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import i18n, { initI18n } from "../i18n";
const I18nContext = createContext(() => (key) => key);
export const TranslationProvider = ({ children, language }) => {
    const [t, setT] = useState(() => i18n.t.bind(i18n));
    useEffect(() => {
        initI18n(language);
        setT(() => i18n.t.bind(i18n));
    }, [language]);
    return _jsx(I18nContext.Provider, { value: t, children: children });
};
export const useTranslation = () => useContext(I18nContext);
