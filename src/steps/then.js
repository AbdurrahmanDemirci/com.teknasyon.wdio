const { Then } = require('@cucumber/cucumber');

const checkURLIncludes = require('../support/check/checkURLIncludes')
const checkElementExisting = require('../support/check/checkElementExisting')
const checkTitle = require('../support/check/checkTitle')
const checkElementActionDisplayed = require('../support/check/checkElementActionDisplayed')
const checkElementDisplayedClick = require('../support/check/checkElementDisplayedClick')
const checkElementTextIncludes = require('../support/check/checkElementTextIncludes')


Then(
    /^I expect it to includes with "([^"]*)" url. If not, print error "([^"]*)"$/, async function (url, message) {
        await checkURLIncludes.call(this, url, message);
    }
);

Then(
    /^I expect is exist check "([^"]*)". If not, print error "([^"]*)"$/, async function (key, message) {
        await checkElementExisting.call(this, key, message);
    }
);

Then(
    /^I expect the title of the site to be "([^"]*)". If not, print error "([^"]*)"$/, async function (title, message) {
        await checkTitle.call(this, title, message);
    }
);

Then(
    /^I expect is (displayed|not displayed) check "([^"]*)". If not, print error "([^"]*)"$/, async function (action, key, message) {
        await checkElementActionDisplayed.call(this, action, key, message);
    }
);

Then(
    /^I expect element "([^"]*)" is visible and click it. If not, print error "([^"]*)"$/, async function (key, message) {
        await checkElementDisplayedClick.call(this, key, message);
    }
);

Then(
    /^I expect that search for "([^"]*)" value in element "([^"]*)" If not, print error "([^"]*)"$/, async function (key, text, message) {
        await checkElementTextIncludes.call(this, key, text, message);
    }
);