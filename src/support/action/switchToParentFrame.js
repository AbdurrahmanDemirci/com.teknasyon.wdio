

module.exports = async function () {

    await (await browser.switchToParentFrame());
    console.info("' " + " '" + " => Switch to parent frame")
};