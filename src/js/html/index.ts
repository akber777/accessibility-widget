import { BASE_URL } from "../constant/constant";

const languages: Array<{
  key: string;
  value: string;
}> = [
  { key: "tr", value: "Turkish" },
  { key: "az", value: "Azerbaijan" },
  { key: "en", value: "English" },
  { key: "es", value: "Espanol" },
  { key: "fr", value: "French" },
  { key: "de", value: "German" },
  { key: "kz", value: "Kazakh" },
  { key: "it", value: "Italian" },
  { key: "ko", value: "Korean" },
  { key: "me", value: "Montenegrin" },
  { key: "ru", value: "Russian" },
  { key: "uz", value: "Uzbek" },
];

function langItem() {
  return languages.map(
    ({ key, value }) => `
    <a class="wiulangItem" wiulang="tr" href="javascript:void(0)" data-lang=${key} >
          <img src="${BASE_URL}/widget-ui/v2/img/${key}-flag.${
      key === "uz" || key === "kz" ? "png" : "svg"
    }">
          <span>${value}</span>
    </a>`
  );
}

export const html: string = ` 
<div class="corpoWid_button_-_start">
  <img src="${BASE_URL}/widget-ui/v2/img/7.svg" />
</div>
<div class="wiuwidgetBox">
<div class="wiucursor"></div>
<div class="wiucursor_white"></div>
<div id="wiureadingMask" class="wiureadingMask-box"></div>
<div class="wiuwidgetBox__top">
  <h5 data-dictionary="accessibilityMenu">Accessibility Menu</h5>
  <a class="wiuwidgetBox__close">
    <img src="${BASE_URL}/widget-ui/v2/img/close-btn.svg">
  </a>
  <a class="wiuwidgetBox__size">
    <img src="${BASE_URL}/widget-ui/v2/img/arrow-left.svg">
  </a>
  <img class="wiupositionBtn" src="${BASE_URL}/widget-ui/v2/img/arrow-left.svg">
</div>
<div class="wiuwidgetBox__items">
  <div class="wiuitem wiuitem1 contrastButton"  tabindex="0">
    <div class="wiuicon">
      <img src="${BASE_URL}/widget-ui/v2/img/icon1.svg">
      <img src="${BASE_URL}/widget-ui/v2/img/icon1-active.svg">
    </div>
    <h4 data-dictionary="contrast">Contrast</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem2 linkSection"  tabindex="0">
    <div class="wiuicon">
      <img src="${BASE_URL}/widget-ui/v2/img/icon2.svg">
      <img src="${BASE_URL}/widget-ui/v2/img/icon2-active.svg">
    </div>
    <h4 data-dictionary="linkSelection">Link Selection</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem3 largerText"  tabindex="0">
    <div class="wiuicon">
      <img src="${BASE_URL}/widget-ui/v2/img/icon3.svg">
      <img src="${BASE_URL}/widget-ui/v2/img/icon3-active.svg">
    </div>
    <h4 data-dictionary="largerText" >Larger Text</h4>
    <span class="wiustepBox largetTextSpan">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem4 spaceBetweenText"  tabindex="0">
    <div class="wiuicon">
      <img src="${BASE_URL}/widget-ui/v2/img/icon4.svg">
      <img src="${BASE_URL}/widget-ui/v2/img/icon4-active.svg">
    </div>
    <h4 data-dictionary="textSpacing">Text Spacing</h4>
    <span class="wiustepBox ">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem5 hideImg"  tabindex="0">
    <div class="wiuicon">
      <img src="${BASE_URL}/widget-ui/v2/img/icon5.svg">
      <img src="${BASE_URL}/widget-ui/v2/img/icon5-active.svg">
    </div>
    <h4 data-dictionary="hideImages" >Hide Images</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem6 cursorItem"  tabindex="0">
    <div class="wiuicon">
      <img src="${BASE_URL}/widget-ui/v2/img/icon6.svg">
      <img src="${BASE_URL}/widget-ui/v2/img/icon6-active.svg">
    </div>
    <h4 data-dictionary="cursor">Cursor</h4>
    <span class="wiustepBox cursorSpanWrap"  tabindex="0">
      <span ></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem7 readMask"  tabindex="0">
    <div class="wiuicon">
      <img src="${BASE_URL}/widget-ui/v2/img/icon7.svg">
      <img src="${BASE_URL}/widget-ui/v2/img/icon7-active.svg">
    </div>
    <h4 data-dictionary="readMask">Read Mask</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem8 lineHeight"  tabindex="0">
    <div class="wiuicon">
      <img src="${BASE_URL}/widget-ui/v2/img/icon8.svg">
      <img src="${BASE_URL}/widget-ui/v2/img/icon8-active.svg">
    </div>
    <h4 data-dictionary="lineHeight">Line Height</h4>
    <span class="wiustepBox lineTextSpan"  tabindex="0">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem9 dyslexiaBtn"  tabindex="0">
    <div class="wiuicon">
      <img src="${BASE_URL}/widget-ui/v2/img/icon9.svg">
      <img src="${BASE_URL}/widget-ui/v2/img/icon9-active.svg">
    </div>
    <h4 data-dictionary="dyslexia">Dyslexia</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem10 monochrome"  tabindex="0">
    <div class="wiuicon">
      <img src="${BASE_URL}/widget-ui/v2/img/icon10.svg">
      <img src="${BASE_URL}/widget-ui/v2/img/icon10-active.svg">
    </div>
    <h4 data-dictionary="monochrome">Monochrome</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
</div>
<h4 class="wiuwidgetBox__copyright" >
  <span class="wiucopyText" data-dictionary="forYourWebsite">Accessibility widget for your site</span>
  <a href="https://www.corpowid.com/en" target="_blank">
    <img src="${BASE_URL}/widget-ui/v2/img/logo.svg" class="wiulogo">
  </a>
</h4>
<div class="wiuwidgetDropdown">
  <div class="wiudropdownBtn">
    <img class="wiudropdownImg" src="${BASE_URL}/widget-ui/v2/img/drp-svg.svg">
    <h5 data-dictionary="settings">Settings</h5>
    <img class="wiudropdownDown" src="${BASE_URL}/widget-ui/v2/img/drp-arrow.svg">
  </div>
  <div class="wiudropdownBody">
    <div class="form-group form-group1">
      <label>
        <span data-dictionary="left">Left</span>
        <input type="radio" value="1" name="position" class="leftBtn">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="form-group form-group2">
      <label>
        <span data-dictionary="right">Right</span>
        <input type="radio" name="position" value="2" checked="true" class="rightBtn">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="wiulangSwitcher">
      <a href="javascript:void(0)" class="wiulangSwitcher__btn" data-dictionary="selectLang">Select Language</a>
      <div class="wiulangSwitcher__drp">
        <a class="wiulangSwitcher__drp-close" href="javascript:void(0)"></a>
        ${langItem()}
      </div>
    </div>
  </div>
</div>
<a class="wiuwidget__resetBtn">
  <img src="${BASE_URL}/widget-ui/v2/img/reset.svg">
  <span data-dictionary="resetAll">Reset all accessibility parameters</span>
</a>
</div>`;
