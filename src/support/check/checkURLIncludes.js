

const assert = require('chai').assert
const getUrl = require('../action/getUrl')

module.exports = async function (url, message) {

    const resGetUrl = await (await getUrl())

    const searchBarUrl = resGetUrl.includes(url);
    assert.ok(searchBarUrl, message + "   " + " Expected: " + url + " Existing: " + resGetUrl)
};