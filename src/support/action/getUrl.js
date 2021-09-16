

module.exports = async function () {

    const getUrl = await (await browser.getUrl())
    console.info("' " + getUrl + " '" + " => Get url")

    return getUrl;
};