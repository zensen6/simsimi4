const form = document.querySelector('.js-form'),
	input = form.querySelector('input'),
	greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
	SHOWING_CN = 'showing',
	INVISIBLE_CN = 'invisible';

function paintGreeting(text) {
	//form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	input.classList.add(INVISIBLE_CN);
	greeting.innerText = `Hello ${text}`;
}

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
	event.preventDefault();
	const iv = input.value;
	paintGreeting(iv);
	saveName(iv);
}

function askForName() {
	//form.classList.add(SHOWING_CN);
	form.addEventListener('submit', handleSubmit);
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if (currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}

init();
//innit
