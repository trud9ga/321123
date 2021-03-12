

let wrapper = document.querySelector('.post__container');
if (wrapper != undefined) {
	console.log('ppp')
	function pp() {
		let scroll = pageYOffset;
		let screen = wrapper.scrollHeight / 2;
		let popup = document.querySelector('.popup_subscribe');
		if (scroll > screen) {
			if (unlock) {
				popup.classList.add("_active");
				body_lock_add(500);
				window.removeEventListener('scroll', pp);
			}
		}
	}
	window.addEventListener('scroll', pp);
}
let popupTime = document.querySelector('.popup_timer')
function popupTimer() {
	popupTime.classList.add("_active");
	if (unlock) {
		body_lock_add(500);
	}
}
setTimeout(popupTimer, 40000)