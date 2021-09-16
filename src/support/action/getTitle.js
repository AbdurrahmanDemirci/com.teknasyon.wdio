

module.exports = async function () {

    const getTitle = await (await browser.getTitle())
    console.info("' " + getTitle + " '" + " => Site title")

    return getTitle
};