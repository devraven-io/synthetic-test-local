// your script starts here

const { chromium } = require('playwright');
const chai = require('chai');
var expect = chai.expect;

console.log(process.env.foo); //access the exposed env variables

const browser = await chromium.launch({headless: false}); //change to headless: true once ready to be created in DevRaven
const page = await browser.newPage();        
await page.goto('https://www.devraven.io');    
const title = await page.title();
expect(title).to.equal('Monitoring for Developers | DevRaven');    
await browser.close();
        
//your script ends here