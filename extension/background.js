chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
    if (sender.url.includes('shop.coles')) {
        chrome.storage.local.set({productList: message});
        
        chrome.tabs.create({
            url: 'http://environmint.ap-southeast-2.elasticbeanstalk.com/dashboard'
        });
    } else if(sender.url.includes('environmint')){ //Website contains "environmint"
        chrome.storage.local.get(['productList'],(result) => {
            sendResponse(result.productList);
            chrome.storage.local.clear();
        })
    }
});