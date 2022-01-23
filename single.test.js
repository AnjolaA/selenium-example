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
    const liveText = await driver
      .findElement(
        By.xpath(
          "/html/body/div/div/main/div[1]/div[2]/div/div/ul/li[1]/div/div/div[1]/div[1]/a/span/p/span"
        )
      )
      .getText();
    expect(liveText).toBe("Latest from three Premier League matches");
  });

  test("it performs a validation of title on the home page 2", async () => {
    const sola = await driver.getTitle();
    expect(sola).toContain("BBC - Home");
  });

  test("it checks the page title of the sports page", async () => {
    await driver
      .findElement(
        By.xpath(
          "/html/body/div/div/header/div[2]/nav/div[1]/div/div[1]/ul[2]/li[5]/a"
        )
      )
      .click();
    const title = await driver.getTitle();
    expect(title).toContain("Home - BBC Sport");
  });
});
