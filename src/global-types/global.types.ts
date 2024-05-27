export type HtmlType = HTMLElementTagNameMap;

export type DictionaryCountry =
  | "az"
  | "tr"
  | "en"
  | "ru"
  | "es"
  | "fr"
  | "de"
  | "kk"
  | "it"
  | "ko"
  | "sr"
  | "uz"
  | "ar"
  | "pl";

export type MotionEventsFuncName =
  | "changeContrast"
  | "closeWidget"
  | "changeLinkSection"
  | "largerText"
  | "spaceBetweenText"
  | "hideImg"
  | "changeCursorView"
  | "readMask"
  | "lineHeight"
  | "textAlign"
  | "dyslexia"
  | "monochrome"
  | "highLightText"
  | "playAnimation"
  | "translateSpecificArea"
  | "toolTips"
  | "mute"
  | "pageStructure"
  | "contentZoom"
  | "selectProfiles";

export type IDictionary = Record<string, Record<DictionaryCountry, string>>;

export interface ITranslate {
  siteLang: string;
  translateLang: string;
  content: string;
}

export type ITranslatedResponseData = {
  meta: {
    flag: string;
    original_counter: string;
    translate_counter: string;
  };
  translation_data: {
    original_text: string;
    translation: string;
  };
} | null;

export type IStaticticsResponseData = {
  success: string;
} | null;

export type IScrappingResponseData = string | null;

export type ILoading = boolean;

export type Reducer<S> = (prevState: S, action: any) => S;

export type Action<T> = {
  type: string;
  payload: T;
};

type MetaDataEntry = {
  name: "keywords" | "title" | "description" | "property";
  content: string;
  prop_des?: string;
};

export type SelectedCountries = "az" | "en" | "ru" | "tr";

export type RestrictedMetaData = Record<
  SelectedCountries,
  Array<MetaDataEntry>
>;

export interface ITextToSpeech {
  text: string;
}

export interface IStatictics {
  uuid: string;
  event_id: string;
  url: string;
}

export type ICheckInstall = Pick<IStatictics, "uuid" | "url">;

export type ICheckInstallResponseData = 200 | 404 | null;

export type ITextToSpeechResponseData = Response | null;

export enum SUPPORT_LANG_TEXT {
  az = "Azərbaycanca",
  en = "English",
  ru = "Русский",
  ar = "العربية",
  tr = "Türkçe",
  es = "Español",
  fr = "Français",
  de = "Deutsch",
  kk = "Қазақша",
  it = "Italiano",
  ko = "한국어",
  sr = "Српски",
  uz = "Oʻzbekcha",
  pl = "Polski",
}

export enum APP_VERSION {
  version = "1.3.2",
}

export enum CORPOWID_PROFILES_TYPE {
  MOTOR_IMPAIRED = 1,
  DYSLEXIA = 2,
  COLOR_BLIND = 3,
  COGNITIVE_LEARNING = 4,
  VISUALLY_IMPAIRED = 5,
  ADHD = 6,
  OPEN_WIDGET = 7,
  PAGE_STRUCTURE = 8
}
