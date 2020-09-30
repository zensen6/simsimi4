const COORDS = 'coords';
const weather = document.querySelector('.js-weather');

const API_KEYS = 'b16ada5b2b80fe82a5e268528ec29289';

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getweather(lat, lon) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			const temperature = json.main.temp;
			const place = json.name;
			weather.innerText = `${place} ${temperature}°C`;
			weather.style.color = 'orange';
		});
}

function handleGeoSucces(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
	getweather(latitude, longitude);
}

function handleGeoError() {
	console.log('cant access');
}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
	const loadedCoords = localStorage.getItem(COORDS);
	if (loadedCoords === null) {
		askForCoords();
	} else {
		const savedCoords = JSON.parse(localStorage.getItem(COORDS));
		getweather(savedCoords.latitude, savedCoords.longitude);
		//console.log(savedCoords);
	}
}

function init() {
	loadCoords();
}

init();
