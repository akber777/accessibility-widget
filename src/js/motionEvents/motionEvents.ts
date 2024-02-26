import { DictionaryCountry } from "@/src/global-types/global.types";
import { dictionary } from "../dictionary/dictionary";
import Service from "../service";

type EventOptions = {
  shadowDom: Element | null;
  reset?: Array<() => void>;
  translation: boolean;
};

class Event {
  private options: EventOptions;
  private largerTextCount: number;
  private increaseFontLargerText: number;
  private cursorCount: number;
  private lineHeightCount: number;
  private lineHeightVal: number;
  private activateTranslate: boolean;

  constructor(props: EventOptions) {
    this.options = {
      ...props,
    };

    this.largerTextCount = 0;
    this.increaseFontLargerText = 16;
    this.cursorCount =
      Number(localStorage.getItem("corpoWid-cursor-type")) || 0;
    this.lineHeightCount = 0;
    this.lineHeightVal = 20;
    this.activateTranslate = false;

    props.reset = [
      this.changeContrast(false),
      this.changeLinkSection(false),
      this.largerText(false),
      this.spaceBetweenText(false),
      this.hideImg(false),
      this.changeCursorView(false),
      this.readMask(false),
      this.lineHeight(false),
      this.dyslexia(false),
      this.monochrome(false),
      this.highLightText(false),
      this.playAnimation(false),
      this.translateSpecificArea(false),
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

  spaceBetweenText(fromTab: boolean) {
    const spaceBetweenText =
      this.options.shadowDom?.shadowRoot?.querySelector(".spaceBetweenText");

    const that = this;

    if (fromTab) {
      spaceBetweenText?.classList.toggle("active");
      that.getAllElementForRealDom("*").forEach((item) => {
        item.classList.toggle("sm-space");
      });
    } else {
      spaceBetweenText?.addEventListener("click", function () {
        spaceBetweenText.classList.toggle("active");
        that.getAllElementForRealDom("*").forEach((item) => {
          item.classList.toggle("sm-space");
        });
      });
    }

    return function reset() {
      spaceBetweenText?.classList.remove("active");
    };
  }

  hideImg(fromTab: boolean) {
    const hideImg =
      this.options.shadowDom?.shadowRoot?.querySelector(".hideImg");

    const that = this;

    if (fromTab) {
      hideImg?.classList.toggle("active");
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
    } else {
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
    }

    return function reset() {
      hideImg?.classList.remove("active");
    };
  }

  changeCursorView(fromTab: boolean) {
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

    const that = this;

    if (fromTab) {
      startCursorChange(
        {
          mouseX: 1200,
          mouseY: 400,
        },
        true
      );
    } else {
      cursorItem?.addEventListener("click", (e) =>
        startCursorChange.call(null, e, true)
      );
    }

    if (localStorage.getItem("corpoWid-cursor-type")) {
      startCursorChange(null, false);
    }

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
        mouseY: rendered ? e.clientY : 400,
      };

      const widgetBtnOpen = that.options.shadowDom?.shadowRoot?.querySelector(
        ".corpoWid_button_-_start"
      ) as HTMLElement;
      cursorItem?.classList.add("active");

      if (rendered) {
        if (that.cursorCount < 1) {
          that.cursorCount++;
          cursorBlack?.classList.add("active");
          if (cursorSpanWrap instanceof HTMLElement) {
            cursorSpanWrap.classList.add("corpoWid-flex_-_--");
          }
          that.moveCursor(cursorBlack, initialMouse);
          if (cursorTitle) {
            cursorTitle.textContent = dictionary["cursorBlack"][getLang];

            localStorage.setItem(
              "corpoWid-cursor-type",
              that.cursorCount.toString()
            );
          }

          removeCursor(false);
        } else if (that.cursorCount < 2) {
          that.cursorCount++;
          cursorWhite?.classList.add("active");
          cursorBlack?.classList.remove("active");
          that.moveCursor(cursorWhite, initialMouse);
          if (cursorTitle) {
            cursorTitle.textContent = dictionary["cursorWhite"][getLang];
            localStorage.setItem(
              "corpoWid-cursor-type",
              that.cursorCount.toString()
            );
          }
          removeCursor(false);
        } else {
          that.cursorCount = 0;
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
            localStorage.setItem(
              "corpoWid-cursor-type",
              that.cursorCount.toString()
            );
            cursorTitle.textContent = dictionary["cursor"][getLang];
          }
          removeCursor(true);
        }

        cursorSpan?.forEach((item, index) => {
          if (index + 1 == that.cursorCount) {
            item.classList.add("active");
          } else {
            if (that.cursorCount === 0) {
              item.classList.remove("active");
            }
          }
        });
      } else {
        if (that.cursorCount === 1) {
          cursorBlack?.classList.add("active");
          if (cursorSpanWrap instanceof HTMLElement) {
            cursorSpanWrap.classList.add("corpoWid-flex_-_--");
          }
          that.moveCursor(cursorBlack, initialMouse);
          if (cursorTitle) {
            cursorTitle.textContent = dictionary["cursorBlack"][getLang];

            localStorage.setItem(
              "corpoWid-cursor-type",
              that.cursorCount.toString()
            );
          }
          removeCursor(false);
        } else if (that.cursorCount === 2) {
          cursorWhite?.classList.add("active");
          cursorBlack?.classList.remove("active");
          that.moveCursor(cursorWhite, initialMouse);
          if (cursorSpanWrap instanceof HTMLElement) {
            cursorSpanWrap.classList.add("corpoWid-flex_-_--");
          }
          if (cursorTitle) {
            cursorTitle.textContent = dictionary["cursorWhite"][getLang];
            localStorage.setItem(
              "corpoWid-cursor-type",
              that.cursorCount.toString()
            );
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
            localStorage.setItem(
              "corpoWid-cursor-type",
              that.cursorCount.toString()
            );
            cursorTitle.textContent = dictionary["cursor"][getLang];
          }
          removeCursor(true);
        }

        cursorSpan?.forEach((item, index) => {
          if (index + 1 === that.cursorCount) {
            item.classList.add("active");
          } else {
            if (that.cursorCount === 0) {
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

      that.cursorCount = 0;

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

  readMask(fromTab: boolean) {
    const readMaskButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".readMask");

    const readMaskWrapper =
      this.options.shadowDom?.shadowRoot?.getElementById("wiureadingMask");

    if (fromTab) {
      readMaskButton?.classList.toggle("active");
      readMaskWrapper?.classList.toggle("active");
      readMaskWrapper?.classList.toggle("corpoWid-block-_--");
    } else {
      readMaskButton?.addEventListener("click", function () {
        readMaskButton.classList.toggle("active");
        readMaskWrapper?.classList.toggle("active");
        readMaskWrapper?.classList.toggle("corpoWid-block-_--");
      });
    }

    function mouseDragging(e: MouseEvent) {
      const mouseY = e.clientY;

      if (readMaskWrapper instanceof HTMLElement) {
        readMaskWrapper.style.top = mouseY + "px";
      }
    }

    document.addEventListener("mousemove", mouseDragging);

    return function reset() {
      readMaskButton?.classList.remove("active");
      readMaskWrapper?.classList.remove("active");
      if (readMaskWrapper)
        readMaskWrapper.classList.remove("corpoWid-block-_--");
    };
  }

  lineHeight(fromTab: boolean) {
    const lineHeight =
      this.options.shadowDom?.shadowRoot?.querySelector(".lineHeight");

    const lineTextWrapSpan =
      this.options.shadowDom?.shadowRoot?.querySelector(".lineTextSpan");

    const lineTextSpan = this.options.shadowDom?.shadowRoot?.querySelectorAll(
      ".lineTextSpan > span"
    );

    const that = this;

    if (fromTab) {
      startLineHeight();
    } else {
      lineHeight?.addEventListener("click", startLineHeight);
    }

    function startLineHeight() {
      lineTextSpan?.forEach((item, index) => {
        if (index == that.lineHeightCount) {
          item.classList.add("active");
        } else {
          if (that.lineHeightCount === 0) {
            item.classList.remove("active");
          }
        }
      });

      if (that.lineHeightCount < 3) {
        if (lineTextWrapSpan instanceof HTMLElement) {
          lineTextWrapSpan.classList.add("corpoWid-flex_-_--");
        }
        lineHeight?.classList.add("active");

        that.lineHeightCount++;
        that.lineHeightVal += 4;
      } else {
        that.lineHeightCount = 0;
        that.lineHeightVal = 20;
        lineHeight?.classList.remove("active");
        lineTextWrapSpan?.classList.remove("active");

        if (lineTextWrapSpan instanceof HTMLElement) {
          lineTextWrapSpan.classList.remove("corpoWid-flex_-_--");
        }
      }

      that.getAllElementForRealDom("*").forEach((item) => {
        if (item instanceof HTMLElement) {
          if (that.lineHeightVal === 20) {
            item.style.lineHeight = "";

            return;
          }

          item.style.transition = "none";
          item.style.lineHeight = that.lineHeightVal + "px";
        }
      });
    }

    return function reset() {
      that.lineHeightCount = 0;
      that.lineHeightVal = 20;
      lineHeight?.classList.remove("active");

      if (lineTextWrapSpan instanceof HTMLElement) {
        lineTextWrapSpan.classList.add("corpoWid-none-_--");
      }
      lineTextWrapSpan?.classList.remove("active");
    };
  }

  dyslexia(fromTab: boolean) {
    const dyslexiaButton =
      this.options.shadowDom?.shadowRoot?.querySelector(".dyslexiaBtn");
    const that = this;

    if (fromTab) {
      dyslexiaButton?.classList.toggle("active");

      that.getAllElementForRealDom("*").forEach((item) => {
        if (dyslexiaButton?.classList.contains("active")) {
          item.classList.add("font-od");
        } else {
          item.classList.remove("font-od");
        }
      });
    } else {
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
    }

    return function reset() {
      dyslexiaButton?.classList.remove("active");
    };
  }

  monochrome(fromTab: boolean) {
    const monochrome =
      this.options.shadowDom?.shadowRoot?.querySelector(".monochrome");

    if (fromTab) {
      monochrome?.classList.toggle("active");
      document.querySelector("html")?.classList.toggle("filter");
    } else {
      monochrome?.addEventListener("click", function () {
        monochrome.classList.toggle("active");
        document.querySelector("html")?.classList.toggle("filter");
      });
    }

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
      const clasList = ["animate__bounceOutRight", "animate__animated"];
      widgetWrapper?.classList.add(...clasList);

      setTimeout(() => {
        widgetWrapper?.classList.remove("animate__bounceOutRight");
        widgetWrapper?.classList.add("wN");
        widgetWrapper?.classList.add("animate__bounceInRight");
      }, 500);
    });

    widgetBoxResizeReverseBtn?.addEventListener("click", function () {
      const clasList = ["animate__bounceOutRight", "animate__animated"];
      widgetWrapper?.classList.add(...clasList);

      setTimeout(() => {
        widgetWrapper?.classList.remove("animate__bounceOutRight");
        widgetWrapper?.classList.remove("wN");
        widgetWrapper?.classList.add("animate__bounceInRight");
      }, 500);
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

  highLightText(fromTab: boolean) {
    const h = ["H1", "H2", "H3", "H4", "H5", "H6"];

    const highLightBtn =
      this.options.shadowDom?.shadowRoot?.querySelector(".higlightTitle");

    const that = this;

    if (fromTab) {
      highLightBtn?.classList.toggle("active");

      that.getAllElementForRealDom("*").forEach((item) => {
        if (h.includes(item.tagName)) {
          item.classList.toggle("corpoWid-highlight-text-_--");
        }
      });
    } else {
      highLightBtn?.addEventListener("click", function () {
        highLightBtn.classList.toggle("active");

        that.getAllElementForRealDom("*").forEach((item) => {
          if (h.includes(item.tagName)) {
            item.classList.toggle("corpoWid-highlight-text-_--");
          }
        });
      });
    }

    return function reset() {
      highLightBtn?.classList.remove("active");
    };
  }

  playAnimation(fromTab: boolean) {
    const animationBtn =
      this.options.shadowDom?.shadowRoot?.querySelector(".stopAnimation");

    const that = this;

    if (fromTab) {
      animationBtn?.classList.toggle("active");
      that.getAllElementForRealDom("*").forEach((item) => {
        item.classList.toggle("corpoWid-animation-pause-_--");
      });
    } else {
      animationBtn?.addEventListener("click", function () {
        animationBtn.classList.toggle("active");
        that.getAllElementForRealDom("*").forEach((item) => {
          item.classList.toggle("corpoWid-animation-pause-_--");
        });
      });
    }

    return function reset() {
      animationBtn?.classList.remove("active");
      that.getAllElementForRealDom("*").forEach((item) => {
        item.classList.remove("corpoWid-animation-pause-_--");
      });
    };
  }

  translateSpecificArea(fromTab: boolean) {
    const that = this;

    const translateBtn =
      this.options.shadowDom?.shadowRoot?.querySelector(".translateSpecific");

    const readMaskTranslate =
      this.options.shadowDom?.shadowRoot?.getElementById("readMaskTranslate");

    if (this.options.translation) {
      if (fromTab) {
        translateBtn?.classList.toggle("active");
        readMaskTranslate?.classList.toggle("active");
        readMaskTranslate?.classList.toggle("corpoWid-block-_--");
        if (!this.activateTranslate) {
          this.activateTranslate = true;
        } else {
          this.activateTranslate = false;
        }
      } else {
        translateBtn?.addEventListener("click", function () {
          translateBtn?.classList.toggle("active");
          if (!that.activateTranslate) {
            that.activateTranslate = true;
          } else {
            that.activateTranslate = false;
          }
        });
      }

      document.addEventListener("mouseup", function (e) {
        const selected = window.getSelection();
        const selectedText = selected?.toString();

        if (selectedText)
          if (selectedText.length > 0) {
            if (that.activateTranslate) {
              const path = window.location.pathname;
              const siteLang = path.split("/")[path.split("/").length - 1];

              const data = Service.getTranslateData({
                siteLang,
                translateLang: localStorage.getItem("corpoWid-lang") || "az",
                content: selectedText,
              });

              data.then((res) => {
                openPopup(res.responseData.translatedText, selected);
              });
            }
          }
      });
    } else {
      translateBtn?.classList.add("corpoWid-none-_--");
    }

    function openPopup(content: string, elem: Selection | null) {
      const element = elem?.anchorNode?.parentNode as HTMLElement;

      const offsetLeft = element.getBoundingClientRect().left;
      const offsetTop = element.getBoundingClientRect().top;

      const contentBox = document.createElement("span");
      contentBox.className = "corpoWid-title-box__--__";
      contentBox.textContent = content;
      contentBox.style.left = offsetLeft + "px";
      contentBox.style.top = offsetTop + element.offsetHeight + 20 + "px";
      contentBox.style.width = element.offsetWidth + "px";
      contentBox.style.minHeight = element.offsetHeight + "px";
      element?.appendChild(contentBox);

      document.querySelector("*")?.addEventListener("click", function () {
        contentBox.remove();
      });
    }

    return function reset() {};
  }

  actionTab() {
    this.getAllElementForRealDom("*").forEach((item) => {
      if (!item.classList.contains("corpoWidShadow_r1cont-wrap")) {
        (item as HTMLElement).tabIndex = -1;
      }
    });

    const allItems =
      this.options.shadowDom?.shadowRoot?.querySelectorAll(".wiuitem");

    const that = this;

    allItems?.forEach((item) => {
      item.addEventListener("keyup", function (e) {
        if ((e as KeyboardEvent).key === "Tab") {
          that.options.shadowDom?.shadowRoot
            ?.querySelector(".wiuwidgetBox")
            ?.classList.add("active");
        } else if ((e as KeyboardEvent).key === "Enter") {
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
