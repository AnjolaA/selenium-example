const { setDefaultTimeout, setWorldConstructor }  = require("@cucumber/cucumber");
const webdriver  = require("selenium-webdriver");
const  { Builder, By, Key, until, Capabilities } = require("selenium-webdriver");
// import seleniumWebdriver, { Capabilities } from "selenium-webdriver";
const chrome = require('selenium-webdriver/chrome');

chrome.setDefaultService(new chrome.ServiceBuilder().build());

let options = new chrome.Options();
let proxyAddress = "0.0.0.0:8090"; 

console.log(proxyAddress)
options.setAcceptInsecureCerts(true);
options.excludeSwitches('enable-logging')
options.addArguments('headless');
options.addArguments('no-sandbox');
options.addArguments('--disable-dev-shm-usage');
options.addArguments('--disable-gpu');
options.addArguments(`--proxy-server=http://${proxyAddress}`);


let capabilities = Capabilities.chrome();


// Set proxy


let buildDriver = function() {
    return new webdriver.Builder()
    // .usingServer("http://localhost:4444/wd/hub")
    .forBrowser('chrome')
    .setChromeOptions(options)
    .withCapabilities(capabilities)
    .build()
}

let World = function() {
    this.driver = buildDriver();
};

setWorldConstructor(World);
setDefaultTimeout(10* 5000)