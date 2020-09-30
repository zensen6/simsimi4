const friend__name = document.querySelector('.friend__name');
const status_bar__clock = document.querySelector('.status-bar__clock');

const USER_LS = 'currentUser';

function getTime() {
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	status_bar__clock.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
	console.log(status_bar__clock);
}

function paintGreeting(text) {
	//form.classList.remove(SHOWING_CN);
	friend__name.innerText = `${text}`;
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if (currentUser === null) {
	} else {
		console.log(currentUser);
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
	getTime();
}

init();
//innit
