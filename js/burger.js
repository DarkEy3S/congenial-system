
const iconMenu = document.querySelector('.icon-menu');
const iconList1 = document.querySelector('.list-menu-1');
const iconList2 = document.querySelector('.list-menu-2');
const iconList3 = document.querySelector('.list-menu-3');
const iconList4 = document.querySelector('.list-menu-4');
if (iconMenu || iconLink) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function (e) {

		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
	iconList1.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
	iconList2.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
	iconList3.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
	iconList4.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})

}


// Прокртуа при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({

				top: gotoBlockValue,
				behavior: "smooth"
			});

		}
	}
}


