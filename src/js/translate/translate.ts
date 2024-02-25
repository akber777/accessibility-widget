import {
  DictionaryCountry,
  IDictionary,
} from "@/src/global-types/global.types";
import { dictionary } from "../dictionary/dictionary";
import { CURSOR_BLACK, CURSOR_WHITE } from "../constant/constant";

type TranslateOptions = {
  shadowDom: HTMLElement;
};

class Translate {
  translateOptions: TranslateOptions;

  constructor(props: TranslateOptions) {
    this.translateOptions = {
      ...props,
    };

    this.changeLang();

    const getLang = (localStorage.getItem("corpoWid-lang") ||
      "az") as DictionaryCountry;

    this.getTranslateData(getLang);
  }

  getAllElementForRealDomAccordingAttribute(): Element[] {
    const elementsArray: Element[] = [];
    const querySelectorAllHtmlElement =
      this.translateOptions.shadowDom.shadowRoot?.querySelectorAll(
        `[data-dictionary]`
      );

    querySelectorAllHtmlElement?.forEach((element) => {
      elementsArray.push(element);
    });

    return elementsArray;
  }

  changeLang() {
    const langs =
      this.translateOptions.shadowDom.shadowRoot?.querySelectorAll(
        ".wiulangItem"
      );

    const that = this;

    langs?.forEach((item) => {
      item.addEventListener("click", function () {
        const langKey = (item.getAttribute("data-lang") ||
          "az") as DictionaryCountry;
        localStorage.setItem("corpoWid-lang", langKey);

        that.translateOptions.shadowDom.shadowRoot
          ?.querySelector(".wiulangSwitcher__drp")
          ?.classList.remove("active");

          that.translateOptions.shadowDom.shadowRoot
          ?.querySelector(".wiudropdownBody")
          ?.classList.remove("open-corpoWid-_drop");

           

        that.getTranslateData(langKey);
      });
    });
  }

  getTranslateData(countryKey: DictionaryCountry) {
    this.getAllElementForRealDomAccordingAttribute().forEach((item) => {
      const dictionaryKey = item.getAttribute("data-dictionary");

      if (dictionaryKey) {
        if (dictionaryKey === "cursor") {
          const cursorType = localStorage.getItem("corpoWid-cursor-type");

          if (CURSOR_BLACK === cursorType) {
            item.textContent = dictionary["cursorBlack"][countryKey];
          } else if (CURSOR_WHITE === cursorType) {
            item.textContent = dictionary["cursorWhite"][countryKey];
          } else {
            item.textContent = dictionary[dictionaryKey][countryKey];
          }
        } else {
          item.textContent = dictionary[dictionaryKey][countryKey];
        }
      }
    });
  }
}

export default Translate;
