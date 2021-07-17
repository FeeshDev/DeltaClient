chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        let useDefault = true;
        let url = chrome.runtime.getURL("newclient.js");
        if (details.url.includes("https://buildroyale.io/js/app.js") && !useDefault)
            return { redirectUrl: url };

        if (details.url.includes("https://buildroyale.io/buildart/logo.png")) return { redirectUrl: chrome.runtime.getURL("img/deltaNew.png") };
        if (details.url.includes("https://buildroyale.io/buildart/lmg.png")) return { redirectUrl: "https://feeshdev.github.io/brWrapRenderer/buildart/lmg.png" };
    },
    { urls: ['<all_urls>'] },
    ['blocking']
);

handler = function (details) {

    var headers = details.requestHeaders,
        blockingResponse = {};
    for (var i = 0, l = headers.length; i < l; ++i) {
        if (headers[i].name == 'User-Agent') {
            headers[i].value = 'Chrome';
            break;
        }
    }

    blockingResponse.requestHeaders = headers;
    return blockingResponse;
};

chrome.webRequest.onBeforeSendHeaders.addListener(
    handler,
    { urls: ['<all_urls>'] },
    ['requestHeaders', 'blocking']
)