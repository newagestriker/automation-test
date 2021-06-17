const landingPage = require("../pageobjects/landing.page");
const { storyVideoPoster, storyVideoIframeSource } = require("../../constants");

describe("story video test", () => {
  it("should contain story video with proper attributes", () => {
    landingPage.open();
    const videoElem = landingPage.storyVideo;
    expect(videoElem).toBeDisplayed();
  });

  it("should contain story video with preload=auto attribute", () => {
    const videoElem = landingPage.storyVideo;
    expect(videoElem).toHaveAttribute("preload", "auto");
  });

  it("should contain story video with playsinline attribute", () => {
    const videoElem = landingPage.storyVideo;
    expect(videoElem).toHaveAttribute("playsinline", "true");
  });

  it("should contain story video with autoplay attribute", () => {
    const videoElem = landingPage.storyVideo;
    expect(videoElem).toHaveAttribute("autoplay", "true");
  });

  it("should contain story video with correct poster attribute", () => {
    const videoElem = landingPage.storyVideo;
    expect(videoElem).toHaveAttribute("poster", storyVideoPoster);
  });

  it("should contain story video with loop attribute", () => {
    const videoElem = landingPage.storyVideo;
    expect(videoElem).toHaveAttribute("loop", "true");
  });

  it("should contain story video with controlslist=nodownload attribute", () => {
    const videoElem = landingPage.storyVideo;
    expect(videoElem).toHaveAttribute("controlslist", "nodownload");
  });

  it("should contain story video with muted attribute", () => {
    const videoElem = landingPage.storyVideo;
    expect(videoElem).toHaveAttribute("muted", "true");
  });

  it("should play video on cicking video overlay button", () => {
    const videoOverlayButton = landingPage.videoOverlayButton;
    const storyVideoIframe = landingPage.storyVideoIframe;

    landingPage.acceptCookiesButton.waitForDisplayed();
    landingPage.acceptCookiesButton.click();

    videoOverlayButton.waitForDisplayed();
    landingPage.clickStoryVideoOverlayButton();

    storyVideoIframe.waitForDisplayed();
    expect(storyVideoIframe).toHaveAttributeContaining(
      "src",
      storyVideoIframeSource
    );
  });
});
