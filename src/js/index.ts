import Ui from "@/src/js/ui/ui";

declare global {
  interface Window {
    CorpoWid: any;
  }
}

type CorpoWidOptions = {
  id: string;
  styleWidgetIcon: Record<string, string | number>;
};

function CorpoWid({ id, styleWidgetIcon }: CorpoWidOptions) {
  const self = {
    start: function () {
      new Ui({
        styleWidgetIcon,
      });
    },
  };

  return self;
}

window.CorpoWid = CorpoWid;
