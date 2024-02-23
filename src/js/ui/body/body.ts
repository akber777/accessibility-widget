import { HtmlType } from "@/src/global-types/global.types";
import MotionEvent from "@/src/js/motionEvents/motionEvents";
import { html } from "../../html";

type BodyOptions = {
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
  setupBodyOptions: BodyOptions;

  constructor({
    rootElement,
    styleCdnOptions,
    headStyleTag,
    styleWidgetIcon,
  }: BodyOptions) {
    this.setupBodyOptions = {
      rootElement,
      styleCdnOptions,
      headStyleTag,
      styleWidgetIcon,
    };

    this.setupBody();
  }

  setupBody() {
    const head = document.querySelector("head");

    if (head) head.innerHTML += this.setupBodyOptions.headStyleTag;

    //shadow dom
    const shadowDomContainer = document.createElement("div");

    document
      .querySelector(this.setupBodyOptions.rootElement)
      ?.appendChild(shadowDomContainer);

    shadowDomContainer.className = "corpoWidShadow_r1cont-wrap";

    const shadowRoot = shadowDomContainer!.attachShadow({ mode: "open" });

    this.setupBodyOptions.styleCdnOptions.forEach(({ href, tag, rel }) => {
      const style = document.createElement("link");
      style.rel = rel;
      style.href = href;
      shadowRoot.appendChild(style);
    });

    shadowRoot.innerHTML += html;

    const openWidgetbtn = shadowDomContainer.shadowRoot?.querySelector(
      ".corpoWid_button_-_start"
    ) as HTMLDivElement;

    const widgetWrap = shadowDomContainer.shadowRoot?.querySelector(
      ".wiuwidgetBox"
    ) as HTMLDivElement;

    for (const key in this.setupBodyOptions.styleWidgetIcon) {
      const item: any = key;

      const checkType =
        typeof this.setupBodyOptions.styleWidgetIcon[key] === "number"
          ? "px"
          : "";

      openWidgetbtn.style[item] =
        this.setupBodyOptions.styleWidgetIcon[key] + checkType;
    }

    openWidgetbtn.addEventListener("click", function () {
      widgetWrap.classList.toggle("active");
    });

    new MotionEvent({
      shadowDom: shadowDomContainer,
    });
  }
}

export default Body;
