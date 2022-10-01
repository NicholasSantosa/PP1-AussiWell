let environmintInit = () => {
    let productList = [];
    document.querySelectorAll('.product-item-header .product-name').forEach(element => {
        console.log(element.textContent);
    });

    console.log(productList);
    chrome.runtime.sendMessage("cbobdkblikjleicamhminlmpjljajinn", "hi bbbg");
}