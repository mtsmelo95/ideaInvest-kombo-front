
import { ThemeProvider } from "@material-tailwind/react";

import COOKIES_KEYS from "../src/configs/coockiesKeys";
import { getRawCookie } from "../src/utils/coockies";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { initReactI18next } from "react-i18next";
import { default as enTranslation } from "../src/i18n/en/enTranslation.json";
import { default as ptTranslation } from "../src/i18n/pt-BR/ptTranslation.json";

const cookieLanguage = getRawCookie(COOKIES_KEYS.language);
const hasCookie = Object.keys(cookieLanguage).length;
const language = hasCookie ? cookieLanguage : "pt";

i18next.use(initReactI18next).init({
  lng: language,
  debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },
    pt: {
      translation: ptTranslation,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [, setIsLanguageLoaded] = useState(false);

  useEffect(() => {
    i18next.on("initialized", () => {
      setIsLanguageLoaded(true);
    });
  }, []);

  if (!i18next.isInitialized) return null;

  return <ThemeProvider>{children}</ThemeProvider>;
}
