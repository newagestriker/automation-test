const landingPage = require("../pageobjects/landing.page");

describe("landing page feature test", () => {
  it("should contain title", () => {
    landingPage.open();

    landingPage.acceptCookiesButton.waitForDisplayed();
    landingPage.acceptCookiesButton.click();

    expect(browser).toHaveTitle("A million more | Volvo Cars - International");
  });

  it("should contain brand image", () => {
    landingPage.brandImage.waitForDisplayed();
    expect(landingPage.brandImage).toBeExisting();
  });
  it("should contain Introduction with Text", () => {
    expect(landingPage.modelIntro).toHaveText(
      "Ideas that change the world are often the most controversial."
    );
  });
  it("should contain Description with Text", () => {
    expect(landingPage.modelDesc).toHaveText(
      "After we introduced the 3-point safety belt, we faced a world of criticism. Since then, it has saved more than a million lives. Now it's time for the next step. For everyone's safety."
    );
  });
  it("should navigate from learn more link", () => {
    const link = landingPage.learnMoreLink;
    link.waitForDisplayed();
    console.log(link.getText());
    expect(link).toBeClickable();
    link.click();
    expect(browser).toHaveUrl(
      "https://www.volvocars.com/intl/v/car-safety/safety-heritage"
    );
  });
});
