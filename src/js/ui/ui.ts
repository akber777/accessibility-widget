import Button from "@/src/js/ui/button/button";
import Body from "@/src/js/ui/body/body";

class Ui {
  constructor() {
    this.setup();
  }

  setup() {
    new Button({
      elementType: "a",
      rootElement: "body",
      style: {
        position: "fixed",
        bottom: 0,
        right: 0,
        cursor: "pointer",
      },
    });

    new Body({
      rootElement: "body",
      styleCdnOptions: [
        {
          href: `https://corpowid.com/themes/corpowid/assets/widget/v2/main.min.css?v${
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
      headStyleTag: `<link rel="stylesheet" href="https://corpowid.com/themes/corpowid/assets/widget/v2/main.min.css?v${
        Math.random() * 1000
      }" />`,
    });
  }
}

export default Ui;
