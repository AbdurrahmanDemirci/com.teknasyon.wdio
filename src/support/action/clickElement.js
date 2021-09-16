

const locatorsData = require('../locatorsData/elementValues.json')
const checkIfElementExists = require('../check/checkIfElementExists')

module.exports = async function (key) {

    await (await checkIfElementExists(key))

    await (await $(locatorsData[key])).click();
    console.info("' " + key + " '" + " => The element was clicked")
};