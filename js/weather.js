const API_KEY = "xxxxxxx";
//https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}

function onGeoOk(position) {
	//console.log(position);
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	//console.log(url);

	// fetch를 통해 비동기로 url을 호출해서 데이터를 받아옴
	fetch(url).then((response) => response.json()).
		then((data) => {
			//console.log(data.name, data.weather[0].main, data.main.temp);

			const temp = document.querySelector("#weather-temp");
			const city = document.querySelector("#weather-city");
			const icon = document.querySelector("#weather-icon"); // 아이콘을 표시할 요소
			const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

			city.innerText = data.name;
			temp.innerText = `${data.main.temp}°`; // ${data.weather[0].main}
      icon.src = iconUrl;

		});
};

function onGeoError(){
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 위치정보 잡아옴