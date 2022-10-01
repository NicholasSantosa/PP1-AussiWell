let environmintInit = () => {
    let productList = [];
    document.querySelectorAll('.product-item-header .product-name').forEach(element => {
        productList.push(element.textContent);
    });

    chrome.runtime.sendMessage("faikcccoaifenipeoglkklceopfnnhoj", productList);
}