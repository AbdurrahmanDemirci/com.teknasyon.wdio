

const assert = require('chai').assert
const getTitle = require('../action/getTitle')

module.exports = async function (title, message) {

    const resGetTitle = await (await getTitle())
    assert.ok(resGetTitle == title, message + "   " + " Expected: " + title + " Existing: " + resGetTitle)
};