const landingPage = require("../pageobjects/landing.page");

describe("test 4 positive videos", () => {
  it("positive video 1 should be working", () => {
    landingPage.open();

    landingPage.acceptCookiesButton.waitForDisplayed();
    landingPage.acceptCookiesButton.click();

    landingPage.positiveStory1Div.waitForDisplayed();
    landingPage.positiveStory1Div.scrollIntoView();
    const storyButton = landingPage.positiveStory1Button;
    const storyVideo = landingPage.positiveStory1Video;
    storyButton.waitForDisplayed();
    expect(storyButton).toBeClickable();

    storyButton.click();

    storyVideo.waitForDisplayed();
    expect(storyVideo).toBeDisplayed();
  });
});
