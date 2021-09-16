

module.exports = async function (seconds) {

    await (await browser.pause(seconds));
    console.info("' " + seconds + " '" + " => Milliseconds were awaited")
};