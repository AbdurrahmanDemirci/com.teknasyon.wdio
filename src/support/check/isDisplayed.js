

const locatorsData = require('../locatorsData/elementValues.json')
const checkIfElementExists = require('./checkIfElementExists')

module.exports = async function (key) {

    await (await checkIfElementExists(key))

    const isDisplayed = await (await $(locatorsData[key])).isDisplayed();
    console.info("' " + isDisplayed + " '" + " => Is displayed element")

    return isDisplayed
};