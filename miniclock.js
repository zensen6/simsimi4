const status_bar__clock = document.querySelector('.status-bar__clock');

const USER_LS = 'currentUser';

function getTime() {
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	status_bar__clock.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
	console.log(status_bar__clock);
}

getTime();
