const Page = require("./page");
const elementUtil = require("../util/elementUtil");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  //page locators:

  get acceptCookiesButton() {
    return $("button.optanon-allow-all.accept-cookies-button");
  }

  get brandImage() {
    return $(
      '[src="https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg"]'
    );
  }
  get modelIntro() {
    return $('[data-autoid="ModelIntro"] > h2');
  }
  get modelDesc() {
    return $("main > div > section > p");
  }
  get videoOverlayButton() {
    return $("button.a.as.bx.by.bz.ca.cb.cc.cd.ce.cf.x");
  }

  get storyVideo() {
    return $("video.a.ck.cl.cm.cn.co.cp.cq.cr.cs.ct.cu.cv.cw.cx");
  }

  get storyVideoIframe() {
    return $("div.au.b.bt.bu.bv.bw.ch.ci.cj.jp.kc.oj.ok > iframe");
  }

  get learnMoreLink() {
    return $('[href="/intl/v/car-safety/safety-heritage"]');
  }

  get positiveStory1Div() {
    return $("div.au.b.bt.bu.bv.ck.fv.is.it.iu.m");
  }

  get positiveStory1Button() {
    return this.positiveStory1Div.$("button");
  }

  get positiveStory1Video() {
    return $("video.a.ck.cl.cm.cn.co.cp.cq.om.on.oo.op.oq.or");
  }

  get buttonForRightPanel() {
    return $("#sitenav-v2-sidenav-toggle");
  }

  get rightPane() {
    return $("div._SiteNav-ay._SiteNav-en._SiteNav-eu._SiteNav-g._SiteNav-j");
  }
  get rightPaneOptions() {
    return $(
      "div._SiteNav-ag._SiteNav-t._SiteNav-v._SiteNav-w._SiteNav-x._SiteNav-y.SiteNav_LinksMenu"
    );
  }

  get rightPaneBuyButton() {
    return this.rightPaneOptions.$("button:first-child");
  }
  get rightPaneScrollablePane() {
    return $('/html/body/div[4]/div[1]/div/div/div[2]/nav/div[2]/div[2]/div/div');
  }

  //page actions:
  open() {
    super.open("/");
  }

  getPageTitle() {
    return elementUtil.doGetPageTitle();
  }
  clickStoryVideoOverlayButton() {
    browser.execute(elementUtil.runClickInBrowser, this.videoOverlayButton);
  }
  isControlsPresentInVideo(element) {
    return elementUtil.doGetAttribute(element, "controls");
  }
}

module.exports = new LoginPage();
