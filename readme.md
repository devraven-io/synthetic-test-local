# Synthetic Test - Local environment

This project helps you develop and execute your Synthetic tests in your local machine before adding those DevRaven for monitoring.

## Requirements

node v17.8.0
npm v8.5.5

To install required browsers for Playwright execution, run `npx playwright@1.21.1 install`

## How to setup

1. Clone this repository to your local machine.
2. cd synthetic-test-local
3. npm install

Your local environment is now ready.

## How to run?

Run `npm start` to kick-off a run. The example test runs in headed mode and launches a new browser to start the test.

```
$ npm start

> synthetic-test-local@1.0.0 start
> node index.js

bar
Test passed

```

## Adding a new test

test.js contains an example Synthetic test. Edit this file to reflect your own test scenario.

Once you are done with the changes for your test scenario, copy the code in test.js and create a new Synthetic test in DevRaven using the code.

