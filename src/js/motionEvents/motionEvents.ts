import { defaultFont } from "@/src/js/constant/constant";

type EventOptions = {
  shadowDom: Element | null;
};

class Event {
  options: EventOptions;

  constructor({ shadowDom }: EventOptions) {
    this.options = {
      shadowDom,
    };
    this.changeContrast();
    this.changeLinkSection();
    this.largerText();
  }

  getAllElement(e: string): Element[] {
    const elementsArray: Element[] = [];
    const querySelectorAllHtmlElement = document.querySelectorAll(
      `${e}:not(style,head,script,meta,title,link,html,body)`
    );

    querySelectorAllHtmlElement.forEach((element) => {
      elementsArray.push(element);
    });

    return elementsArray;
  }

  changeContrast() {
    const contrastButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".contrastButton");

    const that = this;

    contrastButton?.addEventListener("click", function () {
      contrastButton.classList.toggle("active");
      that.getAllElement("*").forEach((item) => {
        item.classList.toggle("dark-contrast");
      });
    });
  }

  changeLinkSection() {
    const linkSectionButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".linkSection");

    const that = this;

    linkSectionButton?.addEventListener("click", function () {
      linkSectionButton.classList.toggle("active");
      that.getAllElement("a").forEach((item) => {
        item.classList.toggle("highlight");
      });
    });
  }

  largerText() {
    const largerTextButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".largerText");

    const that = this;

    let count = 0;

    let increaseFont = defaultFont;

    largerTextButton?.addEventListener("click", function () {
      count++;
      that.getAllElement("*").forEach((item) => {
        if (item.textContent !== "") {
          if (item instanceof HTMLElement) {
            if (count <= 3) {
              increaseFont += 2;
            } else {
              count = 0;
              increaseFont = defaultFont;
            }

            console.log(increaseFont);
          }
        }
      });
    });
  }
}

export default Event;
