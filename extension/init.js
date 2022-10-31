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
	let extensionID = chrome.runtime.id;
	cartBtn.addEventListener('click', () => {
		setTimeout(() => {
			document.querySelector('.trolley-summary-wrapper')
					.insertAdjacentHTML('afterend', `
											<button class='button button-dark' onclick='environmintInit("${extensionID}")' style='margin-top: 20px'>Calculate carbon footprint</button>
											<p style='font-size: 12px; position: relative; top: -6px;'>Powered by <a href='http://environmint.ap-southeast-2.elasticbeanstalk.com/' target='_BLANK' class='button button-plain button-small' style='font-weight: bold; margin: 0; padding: 0; color: #52FA7C'>Environmint</a></p>
										`);
		}, 500)
	});	
} else if (window.location.toString().includes('environmint')){
	
}