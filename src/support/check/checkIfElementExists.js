

const locatorsData = require('../locatorsData/elementValues.json')
const waitFor = require('../action/waitFor')

module.exports = async function (key) {

    for (let i = 0; i < 10; i++) {
        if (isExisting = await (await $(locatorsData[key])).isExisting()) {

            console.info("' " + key + " '" + " => " + i + ". Trail element found")
            break;
        }

        console.info("' " + key + " '" + " => " + i + ". Trail element not found")
        await (await waitFor(2000))
    }
};