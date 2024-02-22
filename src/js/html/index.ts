import { baseURL } from "../constant/constant";

export const html: string = ` <div class="wiuwidgetBox active">
<div class="wiucursor"></div>
<div class="wiucursor_white  "></div>
<div class="wiuwidgetBox__top">
  <h5>Accessibility Menu</h5>
  <a class="wiuwidgetBox__close">
    <img src="${baseURL}/widget-ui/v2/img/close-btn.svg">
  </a>
  <a class="wiuwidgetBox__size">
    <img src="${baseURL}/widget-ui/v2/img/arrow-left.svg">
  </a>
  <img class="wiupositionBtn" src="${baseURL}/widget-ui/v2/img/arrow-left.svg">
</div>
<div class="wiuwidgetBox__items">
  <div class="wiuitem wiuitem1 contrastButton">
    <div class="wiuicon">
      <img src="${baseURL}/widget-ui/v2/img/icon1.svg">
      <img src="${baseURL}/widget-ui/v2/img/icon1-active.svg">
    </div>
    <h4>Contrast</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem2 linkSection">
    <div class="wiuicon">
      <img src="${baseURL}/widget-ui/v2/img/icon2.svg">
      <img src="${baseURL}/widget-ui/v2/img/icon2-active.svg">
    </div>
    <h4>Link Selection</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem3 largerText">
    <div class="wiuicon">
      <img src="${baseURL}/widget-ui/v2/img/icon3.svg">
      <img src="${baseURL}/widget-ui/v2/img/icon3-active.svg">
    </div>
    <h4>Larger Text</h4>
    <span class="wiustepBox largetTextSpan">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem4 spaceBetweenText">
    <div class="wiuicon">
      <img src="${baseURL}/widget-ui/v2/img/icon4.svg">
      <img src="${baseURL}/widget-ui/v2/img/icon4-active.svg">
    </div>
    <h4>Text Spacing</h4>
    <span class="wiustepBox ">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem5 hideImg">
    <div class="wiuicon">
      <img src="${baseURL}/widget-ui/v2/img/icon5.svg">
      <img src="${baseURL}/widget-ui/v2/img/icon5-active.svg">
    </div>
    <h4>Hide Images</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem6 cursorItem">
    <div class="wiuicon">
      <img src="${baseURL}/widget-ui/v2/img/icon6.svg">
      <img src="${baseURL}/widget-ui/v2/img/icon6-active.svg">
    </div>
    <h4>Cursor</h4>
    <span class="wiustepBox cursorSpanWrap">
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem7">
    <div class="wiuicon">
      <img src="${baseURL}/widget-ui/v2/img/icon7.svg">
      <img src="${baseURL}/widget-ui/v2/img/icon7-active.svg">
    </div>
    <h4>Read Mask</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem8">
    <div class="wiuicon">
      <img src="${baseURL}/widget-ui/v2/img/icon8.svg">
      <img src="${baseURL}/widget-ui/v2/img/icon8-active.svg">
    </div>
    <h4>Line Height</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem9">
    <div class="wiuicon">
      <img src="${baseURL}/widget-ui/v2/img/icon9.svg">
      <img src="${baseURL}/widget-ui/v2/img/icon9-active.svg">
    </div>
    <h4>Dyslexia</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div class="wiuitem wiuitem10">
    <div class="wiuicon">
      <img src="${baseURL}/widget-ui/v2/img/icon10.svg">
      <img src="${baseURL}/widget-ui/v2/img/icon10-active.svg">
    </div>
    <h4>Monochrome</h4>
    <span class="wiustepBox">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
</div>
<h4 class="wiuwidgetBox__copyright">
  <span class="wiucopyText">Accessibility widget for your site</span>
  <a href="https://www.corpowid.com/en" target="_blank">
    <img src="${baseURL}/widget-ui/v2/img/logo.svg" class="wiulogo">
  </a>
</h4>
<div class="wiuwidgetDropdown">
  <div class="wiudropdownBtn">
    <img class="wiudropdownImg" src="${baseURL}/widget-ui/v2/img/drp-svg.svg">
    <h5>Settings</h5>
    <img class="wiudropdownDown" src="${baseURL}/widget-ui/v2/img/drp-arrow.svg">
  </div>
  <div class="wiudropdownBody">
    <div class="form-group form-group1">
      <label>
        <span>Left</span>
        <input type="radio" value="1" name="position">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="form-group form-group2">
      <label>
        <span>Right</span>
        <input type="radio" name="position" value="2" checked="true">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="wiulangSwitcher">
      <a href="javascript:void(0)" class="wiulangSwitcher__btn">Select Language</a>
      <div class="wiulangSwitcher__drp">
        <a class="wiulangSwitcher__drp-close" href="javascript:void(0)"></a>
        <a class="wiulangItem" wiulang="tr" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/tr-flag.svg">
          <span>Turkish</span>
        </a>
        <a class="wiulangItem" wiulang="az" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/az-flag.svg">
          <span>Azerbaijan</span>
        </a>
        <a class="wiulangItem active" wiulang="en" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/en-flag.svg">
          <span>English</span>
        </a>
        <a class="wiulangItem" wiulang="es" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/es-flag.svg">
          <span>Espanol</span>
        </a>
        <a class="wiulangItem" wiulang="fr" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/fr-flag.svg">
          <span>French</span>
        </a>
        <a class="wiulangItem" wiulang="de" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/de-flag.svg">
          <span>German</span>
        </a>
        <a class="wiulangItem" wiulang="kz" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/kz-flag.png">
          <span>Kazakh</span>
        </a>
        <a class="wiulangItem" wiulang="it" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/it-flag.svg">
          <span>Italian</span>
        </a>
        <a class="wiulangItem" wiulang="ko" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/ko-flag.svg">
          <span>Korean</span>
        </a>
        <a class="wiulangItem" wiulang="me" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/me-flag.svg">
          <span>Montenegrin</span>
        </a>
        <a class="wiulangItem" wiulang="ru" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/ru-flag.svg">
          <span>Russian</span>
        </a>
        <a class="wiulangItem" wiulang="uz" href="javascript:void(0)">
          <img src="${baseURL}/widget-ui/v2/img/uz-flag.png">
          <span>Uzbek</span>
        </a>
      </div>
    </div>
  </div>
</div>
<a class="wiuwidget__resetBtn">
  <img src="${baseURL}/widget-ui/v2/img/reset.svg">
  <span>Reset all accessibility parameters</span>
</a>
</div>`;
