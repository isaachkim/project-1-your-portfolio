// SUBMIT FORM


const button = document.querySelector('.submit-contact')

function formSubmit() {
	console.log (Array.from(document.querySelectorAll('.input-form input')).reduce(
	(acc, input) => ({ ...acc, [input.id]: input.value }),
	{}
))
}
button.addEventListener('click', formSubmits)



// another form submit

const name = document.querySelector('.input-name input');

const email = document.querySelector('.input-email input');

const subject = document.querySelector('.input-subject input');

const message = document.querySelector('.input-message input');

function formSubmits() {
    console.log(`Name: ${name.value}, Email: ${email.value}, Subject: ${subject.value}, Message: ${message.value}`)
}


// modal
const startBtn = document.querySelector('.modal-welcome');
const welcomeModal = document.querySelector('.modal-welcome');
startBtn.addEventListener('click', hide);
function hide() {
	welcomeModal.classList.add('hide');
}

// carousel

let currentImgIndex = 0;
let previousImgIndex = 0;
const images = document.querySelectorAll('.images');
const next = document.querySelector('.next');
next.addEventListener('click', () => {
	let previousImgIndex = currentImgIndex;
	currentImgIndex = currentImgIndex + 1;
	if (currentImgIndex >= images.length) {
		currentImgIndex = 0;
	}
	images[previousImgIndex].style.display = 'none';
	images[currentImgIndex].style.display = 'block';
});
const prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
	let previousImgIndex = currentImgIndex;
	currentImgIndex = currentImgIndex - 1;
	if (currentImgIndex < 0) {
		currentImgIndex = 3;
	}

	images[previousImgIndex].style.display = 'none';
	images[currentImgIndex].style.display = 'block';
});