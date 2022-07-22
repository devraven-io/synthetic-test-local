// your script starts here

const { chromium } = require('playwright');
const chai = require('chai');
var expect = chai.expect;

console.log(process.env.foo); //access the exposed env variables

const browser = await chromium.launch({headless: true}); //change to headless: false for local testing to see browser launch, must be headless for running in DevRaven environment
const page = await browser.newPage();        
await page.goto('https://www.devraven.io');    
const title = await page.title();
expect(title).to.equal('Monitoring for Developers | DevRaven');    
await browser.close();
        
//your script ends here