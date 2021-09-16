

module.exports = async function (url) {

    await (await browser.url(url))
    console.info("' " + url + " '" + " => Url is gone")
};