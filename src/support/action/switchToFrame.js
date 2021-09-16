

const locatorsData = require('../locatorsData/elementValues.json')
const waitFor = require('../action/waitFor')
const switchToParentFrame = require('../action/switchToParentFrame')
const clickElement = require('../action/clickElement')

module.exports = async function (key) {

    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var length = numbers.length;

    for (var i = 0; i < length; i++) {

        console.info("' " + numbers[i] + " '" + " => Iframe trial")
        try {
            await (await browser.switchToFrame(numbers[i]))

            const isExisting = await (await $(locatorsData[key])).isExisting();
            console.info("' " + isExisting + " '" + " => " + i + ". Iframe wanted element")
            if (isExisting) {

                await (await clickElement(key))
                console.info("' " + key + " '" + " => Iframe wanted element was clicked")
                break;
            }
        } catch (err) {

            console.info("' " + err + " '" + " => Error message")
        }

        await (await switchToParentFrame());
        await (await waitFor(1000))
    }
};