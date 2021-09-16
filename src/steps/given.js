const { Given } = require('@cucumber/cucumber');

const clickElement = require('../support/action/clickElement')
const openURL = require('../support/action/openURL')
const waitFor = require('../support/action/waitFor')
const setInputField = require('../support/action/setInputField')
const uploadFile = require('../support/action/uploadFile')


Given(
    /^The click on "([^"]*)" element$/, async function (key) {
        await clickElement.call(this, key);
    }
);

Given(
    /^The opened is url "([^"]*)"$/, async function (url) {
        await openURL.call(this, url);
    }
);

Given(
    /^The wait for seconds "([^"]*)"$/, async function (seconds) {
        await waitFor.call(this, seconds);
    }
);

Given(
    /^The click on "([^"]*)" element. Write "([^"]*)" in the relevant field$/, async function (key, text) {
        await setInputField.call(this, key, text);
    }
);

Given(
    /^The load file "([^"]*)" into element "([^"]*)"$/, async function (path, key) {
        await uploadFile.call(this, path, key);
    }
);