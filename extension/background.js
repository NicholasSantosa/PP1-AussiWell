chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
    if (sender.url.includes('shop.coles')) {
        chrome.storage.local.set({productList: message});

        chrome.tabs.create({
            url: 'https://environmint.mixmav.me/dashboard'
        });
    } else if(sender.url.includes('environmint')){ //Website contains "environmint"
        chrome.storage.local.get(['productList'],(result) => {
            sendResponse(result.productList);
            chrome.storage.local.clear();
        })
    }
});