if (window.location.toString().includes('shop.coles')) {
	/*
		Inject a custom script to handle button click from the window context.
	*/

	var s = document.createElement('script');
	s.src = chrome.runtime.getURL('./button.js');
	s.onload = function() {
		this.remove();
	};

	(document.head || document.documentElement).appendChild(s);


	const cartBtn = document.querySelector('.draw-link-cart');

	/*
		* Cart is closed by default; wait for it to open before rendering the button.
	*/

	cartBtn.addEventListener('click', () => {
		setTimeout(() => {
			document.querySelector('.trolley-summary-wrapper')
					.insertAdjacentHTML('afterend', `<button class='button button-dark' onclick='environmintInit()' style='margin-top: 20px'>Calculate carbon footprint</button>`);
		}, 500)
	});	
} else if (window.location.toString().includes('environmint.mixmav')){
	
}