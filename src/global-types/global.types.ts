export type HtmlType = HTMLElementTagNameMap;

export type DictionaryCountry =
  | "az"
  | "tr"
  | "en"
  | "ru"
  | "es"
  | "fr"
  | "de"
  | "kz"
  | "it"
  | "ko"
  | "me"
  | "uz";

export type IDictionary = Record<string, Record<DictionaryCountry, string>>;

export interface ITranslate {
  siteLang: string;
  translateLang: string;
  content: string;
}
