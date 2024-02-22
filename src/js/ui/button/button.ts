import { HtmlType } from "@/src/global-types/global.types";

type ButtonOptions = {
  elementType: HtmlType;
  style?: Record<string, string | number>;
  rootElement: string;
};

class Button {
  setup: ButtonOptions;

  constructor({
    elementType = "a",
    style = {
      backgroundColor: "transparent",
    },
    rootElement = "body",
  }: ButtonOptions) {
    this.setup = {
      elementType,
      style,
      rootElement,
    };
    this.createButton(elementType);
  }

  createButton(element: string) {
    const createElement = document.createElement(element);
    const img = document.createElement("img");
    img.src = "https://front.gocreative.az/widget-ui/v2/img/7.svg";
    createElement.appendChild(img);

    for (const key in this.setup.style) {
      const item: any = key;

      const checkType = typeof this.setup.style[key] === "number" ? "px" : "";

      createElement.style[item] = this.setup.style[key] + checkType;
    }

    document.querySelector(this.setup.rootElement)?.appendChild(createElement);
  }
}

export default Button;
