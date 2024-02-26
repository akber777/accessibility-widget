import Ui from "@/src/js/ui/ui";

declare global {
  interface Window {
    CorpoWid: any;
  }
}

type CorpoWidOptions = {
  id: string;
  styleWidgetIcon: Record<string, string>;
  translation: boolean;
};

function CorpoWid({ id, styleWidgetIcon, translation }: CorpoWidOptions) {
  const self = {
    start: function () {
      new Ui({
        styleWidgetIcon,
        translation,
      });
    },
    translation,
  };

  return self;
}

window.CorpoWid = CorpoWid;
