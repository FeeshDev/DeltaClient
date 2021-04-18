chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        let url = chrome.runtime.getURL("newclient.js");
        //url = "https://buildroyale.io/js/app.js";
        //url = "https://google.com"
        if (details.url.includes("https://buildroyale.io/js/app.js"))
            return { redirectUrl: url };
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