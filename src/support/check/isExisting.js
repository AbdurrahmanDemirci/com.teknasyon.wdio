

const locatorsData = require('../locatorsData/elementValues.json')
const checkIfElementExists = require('./checkIfElementExists')

module.exports = async function (key) {

    await (await checkIfElementExists(key))

    const isExisting = await (await $(locatorsData[key])).isExisting();
    console.info("' " + isExisting + " '" + " => Is existing element")

    return isExisting
};