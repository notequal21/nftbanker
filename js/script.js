

if (document.querySelector('.header-body__burger')) {
	const openBtn = document.querySelector('.header-body__burger')
	const menu = document.querySelector('.header-body__menu')
	const menuBtns = document.querySelectorAll('.header-body__menu-item')
	const body = document.querySelector('body')

	let toggleBurger = () => {
		if (openBtn.classList.contains('active')) {
			openBtn.classList.remove('active')
			menu.classList.remove('active')
			body.classList.remove('lock')
		} else {
			openBtn.classList.add('active')
			menu.classList.add('active')
			body.classList.add('lock')
		}
	}

	menuBtns.forEach(item => {
		if (window.innerWidth < 768) {
			item.addEventListener('click', toggleBurger)
		}
	})
	openBtn.addEventListener('click', toggleBurger)
}
// window.addEventListener('load', {

// })
// window.onload = () => {
//   let iframeLink = document.createElement('link');
//   iframeLink.href = 'fileName.css';
//   iframeLink.rel = 'stylesheet';
//   iframeLink.type = 'text/css';
//   frames[0].document.head.appendChild(iframeLink);
// }

// window.onload = () => {
//   let iframeName = document.getElementById('iframeLine');
//   let iframeContent = iframeName.contentDocument;
//   iframeContent.body.innerHTML = iframeContent.body.innerHTML + `<style>.dark{color: #fff}</style>`;
// }
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

const select = document.querySelector('.js-select');
const calcInput = document.querySelector('#calc-input')
const calcOutput = document.querySelector('#calc-output')

let calculate = () => {
  calcOutput.value = `${Math.round(calcInput.value * select.value)}$`
}

calcInput.addEventListener('input', calculate)
$('.js-select').on('change', calculate)

$(document).ready(function () {
    $('.faq-body__item-title').click(function (event) {
        if ($('.faq-body').hasClass('one')) {
            $('.faq-body__item-title').not($(this)).removeClass('active');
            $('.faq-body__item-content').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300)
    });
});
$(document).ready(function () {
  $('.js-select').select2({
    minimumResultsForSearch: -1
  });
});


function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});