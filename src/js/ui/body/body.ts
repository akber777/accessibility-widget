import { HtmlType } from "@/src/global-types/global.types";
import MotionEvent from "@/src/js/motionEvents/motionEvents";
import { html } from "../../html";
import Translate from "../../translate/translate";

export type BodyOptions = {
  rootElement: HtmlType;
  styleCdnOptions: {
    href: string;
    tag: HtmlType;
    rel: string;
  }[];
  styleWidgetIcon: Record<string, string | number>;
  headStyleTag: string;
};

class Body {
  options: BodyOptions;
  shadowDomContainer: HTMLElement;

  constructor(props: BodyOptions) {
    const shadowDomContainer = document.createElement("div");

    this.options = {
      ...props,
    };

    this.shadowDomContainer = shadowDomContainer;

    this.setupBody();
  }

  setupBody() {
    const head = document.querySelector("head");

    if (head) head.innerHTML += this.options.headStyleTag;

    //shadow dom

    document
      .querySelector(this.options.rootElement)
      ?.appendChild(this.shadowDomContainer);

    this.shadowDomContainer.className = "corpoWidShadow_r1cont-wrap";

    const shadowRoot = this.shadowDomContainer!.attachShadow({
      mode: "open",
    });

    this.options.styleCdnOptions.forEach(({ href, tag, rel }) => {
      const style = document.createElement("link");
      style.rel = rel;
      style.href = href;
      shadowRoot.appendChild(style);
    });

    shadowRoot.innerHTML += html;

    const openWidgetbtn = this.shadowDomContainer.shadowRoot?.querySelector(
      ".corpoWid_button_-_start"
    ) as HTMLDivElement;

    const widgetWrap = this.shadowDomContainer.shadowRoot?.querySelector(
      ".wiuwidgetBox"
    ) as HTMLDivElement;

    for (const key in this.options.styleWidgetIcon) {
      const item: any = key;

      const checkType =
        typeof this.options.styleWidgetIcon[key] === "number" ? "px" : "";

      openWidgetbtn.style[item] = this.options.styleWidgetIcon[key] + checkType;
    }

    openWidgetbtn.addEventListener("click", function () {
      widgetWrap.classList.toggle("active");
    });

    new MotionEvent({
      shadowDom: this.shadowDomContainer,
    });

    new Translate({
      shadowDom: this.shadowDomContainer,
    });
  }
}

export default Body;
