

const locatorsData = require('../locatorsData/elementValues.json')

module.exports = async function (path, key) {

    const filePath = path
    const remoteFilePath = await browser.uploadFile(filePath)

    await (await $(locatorsData[key])).setValue(remoteFilePath);
};