

const assert = require('chai').assert
const isExisting = require('./isExisting')

module.exports = async function (key, message) {

    assert.ok(await (await isExisting(key)), message)
    console.info("' " + key + " '" + " => There is")
};