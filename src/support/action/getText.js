

const locatorsData = require('../locatorsData/elementValues.json')
const checkIfElementExists = require('../check/checkIfElementExists')

module.exports = async function (key) {

    await (await checkIfElementExists(key))

    const getText = await (await $(locatorsData[key])).getText();
    console.info("' " + getText + " '" + " => Text in the field")

    return getText
};