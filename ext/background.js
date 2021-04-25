chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        let random = Math.random().toString(36).substr(2, 5);
        let devEnv = false;
        let url = devEnv ? chrome.runtime.getURL("newclient.js") : `https://feeshdev.github.io/deltaclient.js?${random}`;
        if (details.url.includes("https://buildroyale.io/js/app.js"))
            return { redirectUrl: url };

        //https://feeshdev.github.io/brWrapRenderer/buildart/lmg.png
        if (details.url.includes("https://buildroyale.io/buildart/logo.png")) return { redirectUrl: chrome.runtime.getURL("logo.png") };
        if (details.url.includes("https://buildroyale.io/buildart/greensheet.png")) return { redirectUrl: chrome.runtime.getURL("greensheet.png") };
        if (details.url.includes("https://buildroyale.io/buildart/redsheet.png")) return { redirectUrl: chrome.runtime.getURL("redsheet.png") };
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