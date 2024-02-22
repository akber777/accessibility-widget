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
    this.spaceBetweenText();
    this.hideImg();
    this.changeCursorView();
  }

  getAllElementForRealDom(e: string): Element[] {
    const elementsArray: Element[] = [];
    const querySelectorAllHtmlElement = document.querySelectorAll(
      `${e}:not(style,head,script,meta,title,link,html)`
    );

    querySelectorAllHtmlElement.forEach((element) => {
      elementsArray.push(element);
    });

    return elementsArray;
  }

  getAllElementForShadowDom(e: string): Element[] {
    const elementsArray: Element[] = [];
    const querySelectorAllHtmlElement =
      this.options.shadowDom?.shadowRoot?.querySelectorAll(`${e}`);

    querySelectorAllHtmlElement?.forEach((element) => {
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
      that.getAllElementForRealDom("*").forEach((item) => {
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
      that.getAllElementForRealDom("a").forEach((item) => {
        item.classList.toggle("highlight");
      });
    });
  }

  largerText() {
    const largerTextButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".largerText");

    const largeTextWrapSpan =
      this.options.shadowDom?.shadowRoot?.querySelector(".largetTextSpan");

    const largeTextSpan = this.options.shadowDom?.shadowRoot?.querySelectorAll(
      ".largetTextSpan > span"
    );

    const that = this;

    let count = 0;

    let increaseFont = 18;

    largerTextButton?.addEventListener("click", function (e) {
      largeTextSpan?.forEach((item, index) => {
        if (index == count) {
          item.classList.add("active");
        } else {
          if (count === 0) {
            item.classList.remove("active");
          }
        }
      });

      largerTextButton.classList.toggle("active");

      if (count < 3) {
        if (largeTextWrapSpan instanceof HTMLElement) {
          largeTextWrapSpan.style.display = "flex";
        }

        count++;
        increaseFont += 2;
      } else {
        count = 0;
        increaseFont = 18;
        largeTextWrapSpan?.classList.remove("active");
        if (largeTextWrapSpan instanceof HTMLElement) {
          largeTextWrapSpan.style.display = "none";
        }
      }

      that.getAllElementForRealDom("*").forEach((item) => {
        if (item instanceof HTMLElement) {
          if (increaseFont === 18) {
            item.style.fontSize = "";

            return;
          }

          item.style.transition = "none";

          item.style.fontSize = increaseFont + "px";
        }
      });
    });
  }

  spaceBetweenText() {
    const spaceBetweenText =
      this.options.shadowDom?.shadowRoot?.querySelector(".spaceBetweenText");

    const that = this;

    spaceBetweenText?.addEventListener("click", function () {
      spaceBetweenText.classList.toggle("active");
      that.getAllElementForRealDom("*").forEach((item) => {
        item.classList.toggle("sm-space");
      });
    });
  }

  hideImg() {
    const hideImg =
      this.options.shadowDom?.shadowRoot?.querySelector(".hideImg");

    const that = this;

    let clicked = false;

    hideImg?.addEventListener("click", function () {
      if (clicked) {
        clicked = false;
      } else {
        clicked = true;
      }

      hideImg.classList.toggle("active");
      that.getAllElementForRealDom("img").forEach((item) => {
        if (item instanceof HTMLElement) {
          if (clicked) {
            item.style.display = "none";
            item.classList.add("removeBcg");
          } else {
            item.style.display = "";
            item.classList.remove("removeBcg");
          }
        }
      });
    });
  }

  changeCursorView() {
    const cursorItem =
      this.options.shadowDom?.shadowRoot?.querySelector(".cursorItem");

    const cursorBlack =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiucursor");

    const cursorWhite =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiucursor_white");

    const cursorSpanWrap =
      this.options.shadowDom?.shadowRoot?.querySelector(".cursorSpanWrap ");

    const cursorSpan = this.options.shadowDom?.shadowRoot?.querySelectorAll(
      ".cursorSpanWrap > span"
    );

    let count = 0;

    const that = this;

    cursorItem?.addEventListener("click", function () {
      cursorItem.classList.add("active");

      if (count < 1) {
        count++;
        cursorBlack?.classList.add("active");
        if (cursorSpanWrap instanceof HTMLElement) {
          cursorSpanWrap.style.display = "flex";
        }
        that.moveCursor(cursorBlack);
      } else if (count < 2) {
        count++;
        cursorWhite?.classList.add("active");
        cursorBlack?.classList.remove("active");
        that.moveCursor(cursorWhite);
      } else {
        cursorBlack?.classList.remove("active");
        cursorWhite?.classList.remove("active");
        cursorItem.classList.remove("active");
        that.moveCursor(null);
        count = 0;
        if (cursorSpanWrap instanceof HTMLElement) {
          cursorSpanWrap.style.display = "none";
        }
      }

      cursorSpan?.forEach((item, index) => {
        if (index + 1 == count) {
          item.classList.add("active");
        } else {
          if (count === 0) {
            item.classList.remove("active");
          }
        }
      });
    });
  }

  moveCursor(elem: Element | null | undefined) {
    const that = this;

    document.addEventListener("mousemove", mouseDragging);

    that.getAllElementForRealDom("*").forEach((item) => {
      if (item instanceof HTMLElement) {
        item.style.cursor = elem ? "none" : "auto";
      }
    });

    that.getAllElementForShadowDom("*").forEach((item) => {
      if (item instanceof HTMLElement) {
        item.style.cursor = elem ? "none" : "auto";
      }
    });

    function mouseDragging(e: MouseEvent) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (elem instanceof HTMLElement) {
        elem.style.left = mouseX + "px";
        elem.style.top = mouseY + "px";
      }
    }
  }
}

export default Event;
