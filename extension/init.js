const cartBtn = document.querySelector('.draw-link-cart');

/*
	* Cart is closed by default; wait for it to open before rendering the button.
*/

cartBtn.addEventListener('click', () => {
	setTimeout(() => {
		document.querySelector('.trolley-summary-wrapper')
				.insertAdjacentHTML('afterend', "<button class='button button-dark' style='margin-top: 20px'>Calculate carbon footprint</button>");
	}, 500)
});