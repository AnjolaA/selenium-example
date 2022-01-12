const { Builder, By, Key, until } = require("selenium-webdriver");

describe("Checking the title of the page for BBC", () => {
  let driver;

  beforeAll(async () => {
    driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://www.bbc.co.uk");
  });

  afterAll(async () => {
    await driver.quit();
  }, 15000);

  test("it performs a validation of title on the home page", async () => {
    const title = await driver.getTitle();
    expect(title).toContain("BBC - Home");
  });
});
