const { When } = require('@cucumber/cucumber');

const scrollIntoView = require('../support/action/scrollIntoView')
const switchToFrame = require('../support/action/switchToFrame')
const switchToParentFrame = require('../support/action/switchToParentFrame')


When(
    /^Scroll on element "([^"]*)"$/, async function (key) {
        await scrollIntoView.call(this, key);
    }
);

When(
    /^Switch to existing frame "([^"]*)" and click$/, async function (key) {
        await switchToFrame.call(this, key);
    }
);

When(
    /^Switch to parent frame$/, async function () {
        await switchToParentFrame.call();
    }
);