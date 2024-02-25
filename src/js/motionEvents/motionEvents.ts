import { DictionaryCountry } from "@/src/global-types/global.types";
import { dictionary } from "../dictionary/dictionary";

type EventOptions = {
  shadowDom: Element | null;
  reset?: Array<() => void>;
};

class Event {
  options: EventOptions;
  largerTextCount: number;
  increaseFontLargerText: number;

  constructor(props: EventOptions) {
    this.options = {
      ...props,
    };

    this.largerTextCount = 0;
    this.increaseFontLargerText = 16;

    props.reset = [
      this.changeContrast(false),
      this.changeLinkSection(false),
      this.largerText(false),
      this.spaceBetweenText(),
      this.hideImg(),
      this.changeCursorView(),
      this.readMask(),
      this.lineHeight(),
      this.dyslexia(),
      this.monochrome(),
      this.highLightText(),
      this.playAnimation(),
      this.actionTab(),
      this.openSettingDropDown(),
      this.openLang(),
    ];

    this.changeWidgetPosition();
    this.resizeWidget();
    this.closeWidget();
    this.openWidget();
    this.resetAllParameters(props.reset);
  }

  getAllElementForRealDom(e: string, except?: string): Element[] {
    const elementsArray: Element[] = [];
    const querySelectorAllHtmlElement = document.querySelectorAll(
      `${e}:not(style,head,script,meta,title,link,html, ${
        except || "undefined"
      })`
    );

    querySelectorAllHtmlElement.forEach((element) => {
      elementsArray.push(element);
    });

    return elementsArray;
  }

  getAllElementForShadowDom(e: string, except?: string): Element[] {
    const elementsArray: Element[] = [];
    const querySelectorAllHtmlElement =
      this.options.shadowDom?.shadowRoot?.querySelectorAll(
        `${e}:not(${except || "undefined"})`
      );

    querySelectorAllHtmlElement?.forEach((element) => {
      elementsArray.push(element);
    });

    return elementsArray;
  }

  changeContrast(fromTab: boolean) {
    const that = this;
    const contrastButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".contrastButton");

    if (fromTab) {
      contrastButton?.classList.toggle("active");
      that.getAllElementForRealDom("*").forEach((item) => {
        item.classList.toggle("dark-contrast");
      });
    } else {
      contrastButton?.addEventListener("click", function () {
        contrastButton.classList.toggle("active");
        that.getAllElementForRealDom("*").forEach((item) => {
          item.classList.toggle("dark-contrast");
        });
      });
    }

    return function reset() {
      contrastButton?.classList.remove("active");
      that.getAllElementForRealDom("*").forEach((item) => {
        item.classList.remove("dark-contrast");
      });
    };
  }

  changeLinkSection(fromTab: boolean) {
    const linkSectionButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".linkSection");

    const that = this;

    if (fromTab) {
      linkSectionButton?.classList.toggle("active");
      that.getAllElementForRealDom("a").forEach((item) => {
        item.classList.toggle("highlight");
      });
    } else {
      linkSectionButton?.addEventListener("click", function () {
        linkSectionButton.classList.toggle("active");
        that.getAllElementForRealDom("a").forEach((item) => {
          item.classList.toggle("highlight");
        });
      });
    }

    return function reset() {
      linkSectionButton?.classList.remove("active");
      that.getAllElementForRealDom("a").forEach((item) => {
        item.classList.remove("highlight");
      });
    };
  }

  largerText(fromTab: boolean) {
    const largerTextButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".largerText");

    const largeTextWrapSpan =
      this.options.shadowDom?.shadowRoot?.querySelector(".largetTextSpan");

    const largeTextSpan = this.options.shadowDom?.shadowRoot?.querySelectorAll(
      ".largetTextSpan > span"
    );

    const that = this;

    if (fromTab) {
      larger();
    } else {
      largerTextButton?.addEventListener("click", larger);
    }

    function larger() {
      console.log(that.largerTextCount);

      largeTextSpan?.forEach((item, index) => {
        if (index == that.largerTextCount) {
          item.classList.add("active");
        } else {
          if (that.largerTextCount === 0) {
            item.classList.remove("active");
          }
        }
      });

      if (that.largerTextCount < 3) {
        largerTextButton?.classList.add("active");
        if (largeTextWrapSpan instanceof HTMLElement) {
          largeTextWrapSpan.classList.add("corpoWid-flex_-_--");
        }

        that.largerTextCount++;

        that.increaseFontLargerText += 2;
      } else {
        that.largerTextCount = 0;
        that.increaseFontLargerText = 16;
        largerTextButton?.classList.remove("active");
        largeTextWrapSpan?.classList.remove("active");
        if (largeTextWrapSpan instanceof HTMLElement) {
          largeTextWrapSpan.classList.remove("corpoWid-flex_-_--");
        }
      }

      that.getAllElementForRealDom("*").forEach((item) => {
        if (item instanceof HTMLElement) {
          if (that.increaseFontLargerText === 16) {
            item.style.fontSize = "";

            return;
          }
          item.style.transition = "none";
          item.style.fontSize = that.increaseFontLargerText + "px";
        }
      });
    }

    return function reset() {
      that.largerTextCount = 0;
      that.increaseFontLargerText = 16;
      largerTextButton?.classList.remove("active");
      largeTextWrapSpan?.classList.remove("active");
      if (largeTextWrapSpan instanceof HTMLElement) {
        largeTextWrapSpan.classList.add("corpoWid-none-_--");
      }
    };
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

    return function reset() {
      spaceBetweenText?.classList.remove("active");
    };
  }

  hideImg() {
    const hideImg =
      this.options.shadowDom?.shadowRoot?.querySelector(".hideImg");

    const that = this;

    hideImg?.addEventListener("click", function () {
      hideImg.classList.toggle("active");
      that.getAllElementForRealDom("img").forEach((item) => {
        if (item instanceof HTMLElement) {
          item.classList.toggle("corpoWid-none-_--");
        }
      });

      that.getAllElementForRealDom("*", "img").forEach((item) => {
        if (item instanceof HTMLElement) {
          item.classList.toggle("removeBcg");
        }
      });
    });

    return function reset() {
      hideImg?.classList.remove("active");
    };
  }

  changeCursorView() {
    const cursorItem =
      this.options.shadowDom?.shadowRoot?.querySelector(".cursorItem");

    const cursorTitle =
      this.options.shadowDom?.shadowRoot?.querySelector(".cursorItem > h4");

    const cursorBlack =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiucursor");

    const cursorWhite =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiucursor_white");

    const cursorSpanWrap =
      this.options.shadowDom?.shadowRoot?.querySelector(".cursorSpanWrap ");

    const cursorSpan = this.options.shadowDom?.shadowRoot?.querySelectorAll(
      ".cursorSpanWrap > span"
    );

    const getLang = (localStorage.getItem("corpoWid-lang") ||
      "az") as DictionaryCountry;

    let count = Number(localStorage.getItem("corpoWid-cursor-type")) || 0;

    const that = this;

    cursorItem?.addEventListener("click", (e) =>
      startCursorChange.call(null, e, true)
    );

    startCursorChange(null, false);

    function removeCursor(show: boolean) {
      function getItems(item: HTMLElement) {
        if (show) {
          item.classList.remove(`corpoWid-cursor-none-_--`);
          item.classList.add(`corpoWid-cursor-auto-_--`);
        } else {
          item.classList.add(`corpoWid-cursor-none-_--`);
          item.classList.remove(`corpoWid-cursor-auto-_--`);
        }
      }

      that.getAllElementForRealDom("*").forEach((item) => {
        if (item instanceof HTMLElement) {
          getItems(item);
        }
      });

      that
        .getAllElementForShadowDom("*", ".corpoWid_button_-_start > img")
        .forEach((item) => {
          if (item instanceof HTMLElement) {
            getItems(item);
          }
        });
    }

    function startCursorChange(e: any, rendered: boolean) {
      const initialMouse = {
        mouseX: rendered ? e.clientX : 1200,
        mouseY: rendered ? e.clientY : 700,
      };

      const widgetBtnOpen = that.options.shadowDom?.shadowRoot?.querySelector(
        ".corpoWid_button_-_start"
      ) as HTMLElement;
      cursorItem?.classList.add("active");

      if (rendered) {
        if (count < 1) {
          count++;
          cursorBlack?.classList.add("active");
          if (cursorSpanWrap instanceof HTMLElement) {
            cursorSpanWrap.classList.add("corpoWid-flex_-_--");
          }
          that.moveCursor(cursorBlack, initialMouse);
          if (cursorTitle) {
            cursorTitle.textContent = dictionary["cursorBlack"][getLang];

            localStorage.setItem("corpoWid-cursor-type", count.toString());
          }

          removeCursor(false);
        } else if (count < 2) {
          count++;
          cursorWhite?.classList.add("active");
          cursorBlack?.classList.remove("active");
          that.moveCursor(cursorWhite, initialMouse);
          if (cursorTitle) {
            cursorTitle.textContent = dictionary["cursorWhite"][getLang];
            localStorage.setItem("corpoWid-cursor-type", count.toString());
          }
          removeCursor(false);
        } else {
          count = 0;
          cursorBlack?.classList.remove("active");
          cursorWhite?.classList.remove("active");
          cursorItem?.classList.remove("active");
          that.moveCursor(null, initialMouse);
          widgetBtnOpen.classList.add("corpoWid-cursor-pointer-_--");

          if (widgetBtnOpen) {
            const imgElement = widgetBtnOpen.querySelector("img");
            if (imgElement) {
              imgElement.classList.add("corpoWid-cursor-pointer-_--");
            }
          }

          if (cursorSpanWrap instanceof HTMLElement) {
            cursorSpanWrap.classList.remove("corpoWid-flex_-_--");
          }
          if (cursorTitle) {
            localStorage.setItem("corpoWid-cursor-type", count.toString());
            cursorTitle.textContent = dictionary["cursor"][getLang];
          }
          removeCursor(true);
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
      } else {
        if (count === 1) {
          cursorBlack?.classList.add("active");
          if (cursorSpanWrap instanceof HTMLElement) {
            cursorSpanWrap.classList.add("corpoWid-flex_-_--");
          }
          that.moveCursor(cursorBlack, initialMouse);
          if (cursorTitle) {
            cursorTitle.textContent = dictionary["cursorBlack"][getLang];

            localStorage.setItem("corpoWid-cursor-type", count.toString());
          }
          removeCursor(false);
        } else if (count === 2) {
          cursorWhite?.classList.add("active");
          cursorBlack?.classList.remove("active");
          that.moveCursor(cursorWhite, initialMouse);
          if (cursorSpanWrap instanceof HTMLElement) {
            cursorSpanWrap.classList.add("corpoWid-flex_-_--");
          }
          if (cursorTitle) {
            cursorTitle.textContent = dictionary["cursorWhite"][getLang];
            localStorage.setItem("corpoWid-cursor-type", count.toString());
          }
          removeCursor(false);
        } else {
          cursorBlack?.classList.remove("active");
          cursorWhite?.classList.remove("active");
          cursorItem?.classList.remove("active");
          that.moveCursor(null, initialMouse);
          widgetBtnOpen.classList.add("corpoWid-cursor-pointer-_--");

          if (widgetBtnOpen) {
            const imgElement = widgetBtnOpen.querySelector("img");
            if (imgElement) {
              imgElement.classList.add("corpoWid-cursor-pointer-_--");
            }
          }

          if (cursorSpanWrap instanceof HTMLElement) {
            cursorSpanWrap.classList.remove("corpoWid-flex_-_--");
          }
          if (cursorTitle) {
            localStorage.setItem("corpoWid-cursor-type", count.toString());
            cursorTitle.textContent = dictionary["cursor"][getLang];
          }
          removeCursor(true);
        }

        cursorSpan?.forEach((item, index) => {
          if (index + 1 === count) {
            item.classList.add("active");
          } else {
            if (count === 0) {
              item.classList.remove("active");
            }
          }
        });
      }
    }

    return function reset() {
      cursorBlack?.classList.remove("active");
      cursorWhite?.classList.remove("active");
      cursorItem?.classList.remove("active");
      if (cursorTitle) cursorTitle.textContent = "Cursor";
      if (cursorSpanWrap instanceof HTMLElement) {
        cursorSpanWrap.classList.add("corpoWid-none-_--");
      }

      count = 0;

      cursorSpan?.forEach((item) => {
        item.classList.remove("active");
      });

      that.moveCursor(null);
    };
  }

  moveCursor(
    elem: Element | null | undefined,
    initialMouse?: Record<string, number>
  ) {
    const that = this;

    document.addEventListener("mousemove", mouseDragging);

    let mouseX = initialMouse?.mouseX;
    let mouseY = initialMouse?.mouseY;

    if (elem instanceof HTMLElement) {
      elem.style.left = mouseX + "px";
      elem.style.top = mouseY + "px";
    }

    function mouseDragging(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (elem instanceof HTMLElement) {
        elem.style.left = mouseX + "px";
        elem.style.top = mouseY + "px";
      }
    }
  }

  readMask() {
    document.addEventListener("mousemove", mouseDragging);

    const readMaskButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".readMask");

    const readMaskWrapper =
      this.options.shadowDom?.shadowRoot?.getElementById("wiureadingMask");

    readMaskButton?.addEventListener("click", function () {
      readMaskButton.classList.toggle("active");
      readMaskWrapper?.classList.toggle("active");
      readMaskWrapper?.classList.toggle("corpoWid-block-_--");
    });

    function mouseDragging(e: MouseEvent) {
      const mouseY = e.clientY;

      if (readMaskWrapper instanceof HTMLElement) {
        readMaskWrapper.style.top = mouseY + "px";
      }
    }

    return function reset() {
      readMaskButton?.classList.remove("active");
      readMaskWrapper?.classList.remove("active");
      if (readMaskWrapper) readMaskWrapper.classList.add("corpoWid-none-_--");
    };
  }

  lineHeight() {
    const lineHeight =
      this.options.shadowDom?.shadowRoot?.querySelector(".lineHeight");

    const lineTextWrapSpan =
      this.options.shadowDom?.shadowRoot?.querySelector(".lineTextSpan");

    const lineTextSpan = this.options.shadowDom?.shadowRoot?.querySelectorAll(
      ".lineTextSpan > span"
    );

    const that = this;

    let count = 0;

    let lineHeightVal = 20;

    lineHeight?.addEventListener("click", function (e) {
      lineTextSpan?.forEach((item, index) => {
        if (index == count) {
          item.classList.add("active");
        } else {
          if (count === 0) {
            item.classList.remove("active");
          }
        }
      });

      lineTextWrapSpan?.classList.toggle("active");

      if (count < 3) {
        if (lineTextWrapSpan instanceof HTMLElement) {
          lineTextWrapSpan.classList.add("corpoWid-flex_-_--");
        }
        lineHeight.classList.add("active");

        count++;
        lineHeightVal += 4;
      } else {
        count = 0;
        lineHeightVal = 20;
        lineHeight.classList.remove("active");
        lineTextWrapSpan?.classList.remove("active");

        if (lineTextWrapSpan instanceof HTMLElement) {
          lineTextWrapSpan.classList.add("corpoWid-none-_--");
        }
      }

      that.getAllElementForRealDom("*").forEach((item) => {
        if (item instanceof HTMLElement) {
          if (lineHeightVal === 20) {
            item.style.lineHeight = "";

            return;
          }

          // item.style.transition = "none";

          item.style.lineHeight = lineHeightVal + "px";
        }
      });
    });

    return function reset() {
      count = 0;
      lineHeightVal = 20;
      lineHeight?.classList.remove("active");

      if (lineTextWrapSpan instanceof HTMLElement) {
        lineTextWrapSpan.classList.add("corpoWid-none-_--");
      }
      lineTextWrapSpan?.classList.remove("active");
    };
  }

  dyslexia() {
    const dyslexiaButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".dyslexiaBtn");
    const that = this;

    dyslexiaButton?.addEventListener("click", function () {
      dyslexiaButton.classList.toggle("active");

      that.getAllElementForRealDom("*").forEach((item) => {
        if (dyslexiaButton.classList.contains("active")) {
          item.classList.add("font-od");
        } else {
          item.classList.remove("font-od");
        }
      });
    });

    return function reset() {
      dyslexiaButton?.classList.remove("active");
    };
  }

  monochrome() {
    const monochrome =
      this.options.shadowDom?.shadowRoot?.querySelector(".monochrome");

    monochrome?.addEventListener("click", function () {
      monochrome.classList.toggle("active");
      document.querySelector("html")?.classList.toggle("filter");
    });

    return function reset() {
      monochrome?.classList.remove("active");
      document.querySelector("html")?.classList.remove("filter");
    };
  }

  openSettingDropDown() {
    const settingButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiudropdownBtn");

    const settingsDropdown =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiudropdownBody");

    settingButton?.addEventListener("click", function () {
      settingsDropdown?.classList.toggle("open-corpoWid-_drop");
    });

    return function reset() {
      settingsDropdown?.classList.remove("open-corpoWid-_drop");
    };
  }

  changeWidgetPosition() {
    const leftBtn =
      this.options.shadowDom?.shadowRoot?.querySelector(".leftBtn");

    const rightbtn =
      this.options.shadowDom?.shadowRoot?.querySelector(".rightBtn");

    const wrapperWidget =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiuwidgetBox");

    const widgetBtn = this.options.shadowDom?.shadowRoot?.querySelector(
      ".corpoWid_button_-_start"
    );

    leftBtn?.addEventListener("click", setPosition.bind(null, "wL", "add"));
    rightbtn?.addEventListener("click", setPosition.bind(null, "wL", "remove"));

    function setPosition(e: string, event: "add" | "remove") {
      wrapperWidget?.classList[event](e);
      widgetBtn?.classList[event](e);
    }
  }

  resizeWidget() {
    const widgetWrapper =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiuwidgetBox");

    const widgetBoxResizeBtn =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiuwidgetBox__size");

    const widgetBoxResizeReverseBtn =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiupositionBtn");

    widgetBoxResizeBtn?.addEventListener("click", function () {
      widgetWrapper?.classList.add("wN");
    });

    widgetBoxResizeReverseBtn?.addEventListener("click", function () {
      widgetWrapper?.classList.remove("wN");
    });
  }

  closeWidget() {
    const widgetClosebtn = this.options.shadowDom?.shadowRoot?.querySelector(
      ".wiuwidgetBox__close"
    );

    const widgetWrapper =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiuwidgetBox");

    widgetClosebtn?.addEventListener("click", function () {
      widgetWrapper?.classList.remove("active");
    });
  }

  openWidget() {
    const widgetWrapper =
      this.options.shadowDom?.shadowRoot?.querySelector(".wiuwidgetBox");

    const widgetCloseButtonWrapper = document.querySelector(
      ".corpoWid_button_-_start"
    );
    widgetCloseButtonWrapper?.addEventListener("click", function () {
      widgetWrapper?.classList.toggle("active");
    });
  }

  openLang() {
    const openLangBtn = this.options.shadowDom?.shadowRoot?.querySelector(
      ".wiulangSwitcher__btn"
    );

    const langWrapper = this.options.shadowDom?.shadowRoot?.querySelector(
      ".wiulangSwitcher__drp"
    );

    const closeLangBtn = this.options.shadowDom?.shadowRoot?.querySelector(
      ".wiulangSwitcher__drp-close"
    );

    openLangBtn?.addEventListener("click", function () {
      langWrapper?.classList.toggle("active");
    });

    closeLangBtn?.addEventListener("click", function () {
      langWrapper?.classList.remove("active");
    });

    return function reset() {};
  }

  highLightText() {
    const h = ["H1", "H2", "H3", "H4", "H5", "H6"];

    const highLightBtn =
      this.options.shadowDom?.shadowRoot?.querySelector(".higlightTitle");

    const that = this;

    highLightBtn?.addEventListener("click", function () {
      highLightBtn.classList.toggle("active");

      that.getAllElementForRealDom("*").forEach((item) => {
        if (h.includes(item.tagName)) {
          item.classList.toggle("corpoWid-highlight-text-_--");
        }
      });
    });

    return function reset() {
      highLightBtn?.classList.remove("active");
    };
  }

  playAnimation() {
    const animationBtn =
      this.options.shadowDom?.shadowRoot?.querySelector(".stopAnimation");

    const that = this;

    animationBtn?.addEventListener("click", function () {
      animationBtn.classList.toggle("active");
      that.getAllElementForRealDom("*").forEach((item) => {
        item.classList.toggle("corpoWid-animation-pause-_--");
      });
    });

    return function reset() {
      animationBtn?.classList.remove("active");
      that.getAllElementForRealDom("*").forEach((item) => {
        item.classList.remove("corpoWid-animation-pause-_--");
      });
    };
  }

  actionTab() {
    const allItems =
      this.options.shadowDom?.shadowRoot?.querySelectorAll(".wiuitem");

    const that = this;

    allItems?.forEach((item) => {
      item.addEventListener("keyup", function (e) {
        if ((e as KeyboardEvent).key === "Enter") {
          const getAttr = item.getAttribute("data-action");

          //@ts-ignore
          if (getAttr) that[getAttr](true);
        }
      });
    });

    return function reset() {};
  }

  resetAllParameters(reset: EventOptions["reset"]) {
    const allUsedClasses = [
      "dark-contrast",
      "sm-space",
      "removeBcg",
      "font-od",
      "filter",
      "highlight",
      "corpoWid-flex_-_--",
      "corpoWid-none-_--",
      "corpoWid-block-_--",
      "corpoWid-cursor-none-_--",
      "corpoWid-cursor-none-_--",
      "corpoWid-cursor-pointer-_--",
      "corpoWid-cursor-auto-_--",
      "corpoWid-highlight-text-_--",
    ];

    const resetBtn = this.options.shadowDom?.shadowRoot?.querySelector(
      ".wiuwidget__resetBtn"
    ) as HTMLElement;

    const widgetBtnOpen = this.options.shadowDom?.shadowRoot?.querySelector(
      ".corpoWid_button_-_start"
    ) as HTMLElement;

    const that = this;

    resetBtn.addEventListener("click", function () {
      // Real Dom
      that.getAllElementForRealDom("*").forEach((item) => {
        allUsedClasses.forEach((e) => {
          item.classList.remove(e);

          if (item instanceof HTMLElement) {
            item.style.fontSize = "";
            item.style.lineHeight = "";
          }
        });
      });

      reset!.forEach((item) => {
        item();
      });

      widgetBtnOpen.classList.add("corpoWid-cursor-pointer-_--");

      if (widgetBtnOpen) {
        const imgElement = widgetBtnOpen.querySelector("img");
        if (imgElement) {
          imgElement.classList.add("corpoWid-cursor-pointer-_--");
        }
      }
    });
  }
}

export default Event;
