import { ITranslate } from "@/src/global-types/global.types";
import { BASE_URL } from "../api/api";

export const requests = {
  getTranslateDataFromApi: async ({
    siteLang,
    translateLang,
    content,
  }: ITranslate) => {
    const res = await fetch(
      `${BASE_URL}/get?q=${content}&langpair=${siteLang}|${translateLang}`
    );

    return await res.json();
  },
};
