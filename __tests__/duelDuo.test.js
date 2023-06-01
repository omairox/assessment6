const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking on the 'draw' button displays div with id='choices", async () => {
    await driver.get("http://localhost:3000");
    await driver.sleep(5000)
    await driver.findElement(By.id('draw')).click()
    const choices= await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
  })

  test("clicking on 'add to duo' displays div with id='player-duo'", async () => {
    await driver.get("http://localhost:3000");
    await driver.sleep(5000)
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const playerDuoDiv = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuoDiv.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
  })
});