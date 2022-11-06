import properties from "properties-reader";
import josa from "../utils/josa";

module Locale {
  const dictionary: Map<string, properties.Reader> = new Map();

  export function init() {
    ["en-UK", "en-US", "ko"]
      .forEach(lang => {
        try {
          dictionary.set(lang, properties(`./src/locale/bundle.${lang}.properties`));
        } catch (ignore) {}
      });
  }

  export module bundle {
    export const defaultLocale = "en-US";

    export function find(lang = defaultLocale, key: string):string {
      const langDict = dictionary.get(lang);
      const defaultDict = dictionary.get(defaultLocale);
      
      return String((langDict ?? defaultDict)?.get(key) ?? defaultDict?.get(key) ?? key);
    }

    export function format(lang = defaultLocale, key: string, ...args: unknown[]) {
      let content = find(lang, key);
      (Array.isArray(args) ? args : [args]).forEach((rc, idx) => {
        content = content.replaceAll(`{${idx}}`, rc);
      });

      const space = content.split(" ");
      space.forEach(word => {
        const match = word.match(/\[(.*?)\]/);
        if (match) {
          const frontJosa = word.split(match[0])[0];
          const selectJosa = josa.c(frontJosa, match[1]);

          content = content.replace(match[0], selectJosa);
        }
      });

      return content;
    }

    export function get(name = "", lang = defaultLocale) {
      if (dictionary.has(lang)) {
        return dictionary.get(lang)?.get(name);
      } else {
        return "";
      }
    }
  }
}

export default Locale;
export const bundle = Locale.bundle;