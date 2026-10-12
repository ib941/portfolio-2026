import en from './en.json';
import ar from './ar.json';

const dictionaries = {
  en,
  ar,
};

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries.en;
}

export { en, ar };
