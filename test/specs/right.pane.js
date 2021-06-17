const landingPage = require("../pageobjects/landing.page");

describe("test right panel", () => {
  it("should display right panel", () => {
    landingPage.open();

    landingPage.acceptCookiesButton.waitForDisplayed();
    landingPage.acceptCookiesButton.click();

    landingPage.buttonForRightPanel.waitForDisplayed();
    landingPage.buttonForRightPanel.click();

    landingPage.rightPane.waitForDisplayed();
    expect(landingPage.rightPane).toBeDisplayed();
  });

  it("should show options", () => {
    expect(landingPage.rightPaneOptions).toBeDisplayed();
    expect(landingPage.rightPaneOptions).toHaveChildren({ eq: 5 });
  });
});
