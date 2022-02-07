
const { Builder, Capabilities, By } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})

it('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

it('Draw button displays the div with id = “choices”', async () => {
    await driver.findElement(By.css('#draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

it('“Add to Duo” button displays the div with id = “player-id”', async () => {
    // await driver.findElement(By.css('#draw')).click()
    const playerId = await driver.findElement(By.id('player-duo'))
    const displayed = await playerId.isDisplayed()
    expect(displayed)
})

it('Bot “Removed from Duo” goes back to “choices”', async () => {
    
})

afterAll(async () => {
    await (await driver).quit()
})

