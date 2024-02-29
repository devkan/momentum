const clock = document.querySelector('h2#clock');

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	// padStart(2, "0") : 2자리 수가 안되면 앞에 0을 붙여줌
	// padStart는 number가 아니라 string에서만 사용 가능. 그래서 String()으로 감싸줌

	clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock();
//setInterval(getClock, 1000);