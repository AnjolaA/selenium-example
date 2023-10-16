'use strict';

const { Given, When, Then } = require('@cucumber/cucumber');
var {By, until, Key} = require('selenium-webdriver');
const assert = require('assert');

    Given('I open app', async function() {
        // await this.driver.get('http://www.bbc.co.uk');
        await this.driver.get('http://localhost:3000');
        // await this.driver.get('https://juiceshop.co.uk/');
    })


  When("I load the page", async function () {
    console.log("")
    // this.driver.findElement(By.name('q'))
    //   .sendKeys(searchQuery);
    // this.driver.findElement(By.name('q'))
    //   .sendKeys(Key.ENTER)
    //     .then(function() {
    //       next();
    //     });
  });

  Then(/^I should see some results$/, async function () {

    const actualTitle = await this.driver.getTitle();
    assert.equal(actualTitle, "OWASP Juice Shop")


    // this.driver.wait(until.elementLocated(By.css('div.g')));
    // this.driver.findElements(By.css('div.g'))
    //   .then(function(elements) {
    //     expect(elements.length).to.not.equal(0);
    //     next();
    //   });
  });

