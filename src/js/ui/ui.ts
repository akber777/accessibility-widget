import Body from "@/src/js/ui/body/body";

type UiSetup = {
  styleWidgetIcon: Record<string, string>;
  translation: boolean;
};

class Ui {
  setupOptions: UiSetup;

  constructor(props: UiSetup) {
    this.setupOptions = {
      ...props,
    };
    this.setup(this.setupOptions.styleWidgetIcon);
  }

  setup(e: UiSetup["styleWidgetIcon"]) {
    new Body({
      translation: this.setupOptions.translation,
      styleWidgetIcon: e,
      rootElement: "body",
      styleCdnOptions: [
        {
          href: `https://res.cloudinary.com/dlzoqroo0/raw/upload/v1708953520/index.626ac570_e9mbiu.css?v${
            Math.random() * 1000
          }`,
          tag: "head",
          rel: "stylesheet",
        },
        {
          href: `https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css?v${
            Math.random() * 1000
          }`,
          tag: "head",
          rel: "stylesheet",
        },
      ],
      headStyleTag: `<link rel="stylesheet" href="https://res.cloudinary.com/dlzoqroo0/raw/upload/v1708953520/index.626ac570_e9mbiu.css?v${
        Math.random() * 1000
      }" />`,
    });
  }
}

export default Ui;
