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
  return languages
    .map(
      ({ key, value }) => `
    <a class= "co wiulangItem ${
      localStorage.getItem("corpoWid-lang") === key ? "active" : ""
    }"   wiulang="tr" href="javascript:void(0)" data-lang=${key}>
    <img src="${BASE_URL}/themes/corpowid/assets/img/${key}-flag.${
        key === "uz" || key === "kz" ? "png" : "svg"
      }">
    <span>${value}</span>
    </a>`
    )
    .join(" ");
}

export const html: string = ` 
<div class="co corpoWid_button_-_start">
  <img src="${BASE_URL}/themes/corpowid/assets/img/7.svg?v=10" />
</div>
<div class="co wiuwidgetBox">
<div class="co wiucursor"></div>
<div class="co wiucursor_white"></div>
<div id="wiureadingMask" class="co wiureadingMask-box"></div>
<div class="co wiuwidgetBox__top">
  <h5 data-dictionary="accessibilityMenu">Accessibility Menu</h5>
  <a class="co wiuwidgetBox__close">
    <img src="${BASE_URL}/themes/corpowid/assets/img/close-btn.svg?v=10">
  </a>
  <a class="co wiuwidgetBox__size">
    <img src="${BASE_URL}/themes/corpowid/assets/img/arrow-left.svg?v=10">
  </a>
  <img class="co wiupositionBtn" src="${BASE_URL}/themes/corpowid/assets/img/arrow-left.svg?v=10">
</div>
<div class="co wiuwidgetBox__items">
  <div class="co wiuitem wiuitem1 contrastButton"  tabindex="1" data-action="changeContrast">
    <div class="co wiuicon">
      <img src="${BASE_URL}/themes/corpowid/assets/img/icon1.svg?v=10">
      <img src="${BASE_URL}/themes/corpowid/assets/img/icon1-active.svg?v=10">
    </div>
    <h4 data-dictionary="contrast">Contrast</h4>
    <span class="co wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>


  <div class="co wiuitem wiuitem10 monochrome"  tabindex="1" data-action="monochrome">
  <div class="co wiuicon">
    <img src="${BASE_URL}/themes/corpowid/assets/img/icon10.svg?v=10">
    <img src="${BASE_URL}/themes/corpowid/assets/img/icon10-active.svg?v=10">
  </div>
  <h4 data-dictionary="monochrome">Monochrome</h4>
  <span class="co wiustepBox">
    <span></span>
    <span></span>
    <span></span>
  </span>
</div>


<div class="co wiuitem wiuitem3 largerText"  tabindex="1"  data-action="largerText">
<div class="co wiuicon">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon3.svg?v=10">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon3-active.svg?v=10">
</div>
<h4 data-dictionary="largerText" >Larger Text</h4>
<span class="co wiustepBox largetTextSpan">
  <span></span>
  <span></span>
  <span></span>
</span>
</div>


<div class="co wiuitem wiuitem4 spaceBetweenText"  tabindex="1"  data-action="spaceBetweenText">
<div class="co wiuicon">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon4.svg?v=10">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon4-active.svg?v=10">
</div>
<h4 data-dictionary="textSpacing">Text Spacing</h4>
<span class="co wiustepBox ">
  <span></span>
  <span></span>
  <span></span>
</span>
</div>



<div class="co wiuitem wiuitem8 lineHeight"  tabindex="1"  data-action="lineHeight">
<div class="co wiuicon">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon8.svg?v=10">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon8-active.svg?v=10">
</div>
<h4 data-dictionary="lineHeight">Line Height</h4>
<span class="co wiustepBox lineTextSpan"  tabindex="1">
  <span></span>
  <span></span>
  <span></span>
</span>
</div>


<div class="co wiuitem wiuitem9 dyslexiaBtn"  tabindex="1" data-action="dyslexia">
<div class="co wiuicon">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon9.svg?v=10">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon9-active.svg?v=10">
</div>
<h4 data-dictionary="dyslexia">Dyslexia</h4>
<span class="co wiustepBox">
  <span></span>
  <span></span>
  <span></span>
</span>
</div>

  <div class="co wiuitem wiuitem2 linkSection"  tabindex="1" data-action="changeLinkSection">
    <div class="co wiuicon">
      <img src="${BASE_URL}/themes/corpowid/assets/img/icon2.svg?v=10">
      <img src="${BASE_URL}/themes/corpowid/assets/img/icon2-active.svg?v=10">
    </div>
    <h4 data-dictionary="linkSelection">Link Selection</h4>
    <span class="co wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>


  <div class="co wiuitem wiuitem11 higlightTitle"  tabindex="1" data-action="highLightText">
<div class="co wiuicon">
  <img src="${BASE_URL}/themes/corpowid/assets/img/highlight_titles.svg?v=10">
  <img src="${BASE_URL}/themes/corpowid/assets/img/highlight_titles_active.svg?v=10">
</div>
<h4 data-dictionary="highlight">Highlight Titles</h4>
<span class="co wiustepBox">
  <span></span>
  <span></span>
  <span></span>
</span>
</div>


<div class="co wiuitem wiuitem7 readMask"  tabindex="1" data-action="readMask">
<div class="co wiuicon">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon7.svg?v=10">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon7-active.svg?v=10">
</div>
<h4 data-dictionary="readMask">Read Mask</h4>
<span class="co wiustepBox">
  <span></span>
  <span></span>
  <span></span>
</span>
</div>

<div class="co wiuitem wiuitem6 cursorItem"  tabindex="1" data-action="changeCursorView">
<div class="co wiuicon">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon6.svg?v=10">
  <img src="${BASE_URL}/themes/corpowid/assets/img/icon6-active.svg?v=10">
</div>
<h4 data-dictionary="cursor">Cursor</h4>
<span class="co wiustepBox cursorSpanWrap"  tabindex="1">
  <span ></span>
  <span></span>
</span>
</div>


  <div class="co wiuitem wiuitem5 hideImg"  tabindex="1"  data-action="hideImg">
    <div class="co wiuicon">
      <img src="${BASE_URL}/themes/corpowid/assets/img/icon5.svg?v=10">
      <img src="${BASE_URL}/themes/corpowid/assets/img/icon5-active.svg?v=10">
    </div>
    <h4 data-dictionary="hideImages" >Hide Images</h4>
    <span class="co wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>



 
  <div class="co wiuitem wiuitem11 stopAnimation"  tabindex="1"  data-action="playAnimation">
    <div class="co wiuicon">
      <img src="${BASE_URL}/themes/corpowid/assets/img/stop_animation.svg?v=10">
      <img src="${BASE_URL}/themes/corpowid/assets/img/stop_animation_active.svg?v=10">
    </div>
    <h4 data-dictionary="stopAnimation">Stop Animation</h4>
    <span class="co wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>


  <div class="co wiuitem wiuitem11 translateSpecific"  tabindex="1"  data-action="translateSpecificArea">
  <div class="co wiuicon">
    <img src="${BASE_URL}/themes/corpowid/assets/img/icon10.svg?v=10">
    <img src="${BASE_URL}/themes/corpowid/assets/img/icon10-active.svg?v=10">
  </div>
  <h4 data-dictionary="translateSpecific">Translate</h4>
  <span class="co wiustepBox">
    <span></span>
    <span></span>
    <span></span>
  </span>
</div>


</div>
<h4 class="co wiuwidgetBox__copyright" >
  <span class="co wiucopyText" data-dictionary="forYourWebsite">Accessibility widget for your site</span>
  <a href="https://www.corpowid.com/en" target="_blank">
    <img src="${BASE_URL}/themes/corpowid/assets/img/logo.svg?v=10" class="co wiulogo">
  </a>
</h4>
<div class="co wiuwidgetDropdown">
  <div class="co wiudropdownBtn">
    <img class="co wiudropdownImg" src="${BASE_URL}/themes/corpowid/assets/img/drp-svg.svg?v=10">
    <h5 data-dictionary="settings">Settings</h5>
    <img class="co wiudropdownDown" src="${BASE_URL}/themes/corpowid/assets/img/drp-arrow.svg?v=10">
  </div>
  <div class="co wiudropdownBody">
    <div class="co form-group form-group1">
      <label>
        <span data-dictionary="left">Left</span>
        <input type="radio" value="1" name="position" class="co leftBtn">
        <span class="co checkmark"></span>
      </label>
    </div>
    <div class="co form-group form-group2">
      <label>
        <span data-dictionary="right">Right</span>
        <input type="radio" name="position" value="2" checked="true" class="co rightBtn">
        <span class="co checkmark"></span>
      </label>
    </div>
    <div class="co wiulangSwitcher">
      <a href="javascript:void(0)" class="co wiulangSwitcher__btn" data-dictionary="selectLang">Select Language</a>
      <div class="co wiulangSwitcher__drp">
        <a class="co wiulangSwitcher__drp-close" href="javascript:void(0)"></a>
        ${langItem()}
      </div>
    </div>
  </div>
</div>
<a class="co wiuwidget__resetBtn">
  <img src="${BASE_URL}/themes/corpowid/assets/img/reset.svg?v=10">
  <span data-dictionary="resetAll">Reset all accessibility parameters</span>
</a>
</div>`;
