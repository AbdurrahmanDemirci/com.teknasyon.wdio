

const locatorsData = require('../locatorsData/elementValues.json')
const clickElement = require('../action/clickElement')

module.exports = async function (key, text) {

    await (await clickElement(key))

    await (await $(locatorsData[key])).setValue(text);
    console.info("' " + text + " '" + " => Text is writed")
};