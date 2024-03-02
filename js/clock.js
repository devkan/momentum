const clock = document.querySelector('h2#clock');

function getClock() {
	const date = new Date();

	let hours = date.getHours();
	let apm = "AM";
	if(hours > 12){
		hours = hours - 12;
		apm = "PM";
	} 

	hours = String(hours).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	// padStart(2, "0") : 2자리 수가 안되면 앞에 0을 붙여줌
	// padStart는 number가 아니라 string에서만 사용 가능. 그래서 String()으로 감싸줌

	clock.innerText = `${hours}:${minutes}`;
};

getClock();
setInterval(getClock, 60000);

