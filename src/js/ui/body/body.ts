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
  headStyleTag: string;
};

class Body {
  setupBodyOptions: BodyOptions;

  constructor({ rootElement, styleCdnOptions, headStyleTag }: BodyOptions) {
    this.setupBodyOptions = {
      rootElement,
      styleCdnOptions,
      headStyleTag,
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

    new MotionEvent({
      shadowDom: shadowDomContainer,
    });
  }
}

export default Body;
