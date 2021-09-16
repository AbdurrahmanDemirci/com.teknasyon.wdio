

const assert = require('chai').assert
const getText = require('../action/getText')

module.exports = async function (key, text, message) {

    const resGetText = await (await getText(key))

    const textField = resGetText.includes(text);
    assert.ok(textField, message + "   " + " Expected: " + text + " Existing: " + resGetText)
};