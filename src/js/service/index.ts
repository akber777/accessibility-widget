import { ITranslate } from "@/src/global-types/global.types";
import { requests } from "./requests/requests";

type ServiceOptions = {};

class Service {
  options: ServiceOptions;

  constructor(props: ServiceOptions) {
    this.options = {
      ...props,
    };
  }

  static getTranslateData({ siteLang, translateLang, content }: ITranslate) {
    return requests.getTranslateDataFromApi({
      siteLang,
      translateLang,
      content,
    });
  }
}

export default Service;
