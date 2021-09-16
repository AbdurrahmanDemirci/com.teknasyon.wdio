

const assert = require('chai').assert
const isDisplayed = require('./isDisplayed')
const waitFor = require('../action/waitFor')

module.exports = async function (action, key, message) {

    await (await waitFor(1500))
    if (action == "displayed") {

        assert.ok(await (await isDisplayed(key)), message)
        console.info("' " + key + " '" + " => There is")
    } else if (action == "not displayed") {

        assert.notOk(await (await isDisplayed(key)), message)
        console.info("' " + key + " '" + " => There is")
    }
};