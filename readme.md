# Synthetic Test - Local environment

This project helps you develop and execute your Synthetic tests in your local machine before adding those DevRaven for monitoring.

## Requirements

node v16
npm v8

## Installation

1. Install NVM 
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

$ export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

2. Install node v16

```
$ nvm install 16
```

3. Install Playwright w/ browsers and required dependencies

```
$ npx playwright@1.21.1 install
$ npx playwright@1.21.1 install-deps
```

4. Clone the git repository and install dependencies

```
$ git clone https://github.com/devraven-io/synthetic-test-local.git
$ cd synthetic-test-local
$ npm install
```

## How to run?

Run `npm start` to kick-off a run.

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

