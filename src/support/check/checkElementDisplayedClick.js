

const assert = require('chai').assert
const isDisplayed = require('./isDisplayed')
const clickElement = require('../action/clickElement')
const waitFor = require('../action/waitFor')

module.exports = async function (key, message) {

    await (await waitFor(1500))
    assert.ok(await (await isDisplayed(key)), message)
    console.info("' " + key + " '" + " => There is")

    await (await clickElement(key))
};