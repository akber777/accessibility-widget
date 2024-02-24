import Body from "@/src/js/ui/body/body";

type UiSetup = {
  styleWidgetIcon: Record<string, string | number>;
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
      styleWidgetIcon: e,
      rootElement: "body",
      styleCdnOptions: [
        {
          href: `https://res.cloudinary.com/dlzoqroo0/raw/upload/v1708796469/index.626ac570_g7rw3s.css?v${
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
      headStyleTag: `<link rel="stylesheet" href="https://res.cloudinary.com/dlzoqroo0/raw/upload/v1708796469/index.626ac570_g7rw3s.css?v${
        Math.random() * 1000
      }" />`,
    });
  }
}

export default Ui;
