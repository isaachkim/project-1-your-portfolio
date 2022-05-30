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
const startBtnEl = document.querySelector('.modal-welcome');
const welcomeModalEl = document.querySelector('.modal-welcome');
startBtnEl.addEventListener('click', hide);
function hide() {
	welcomeModalEl.classList.add('hide');
}