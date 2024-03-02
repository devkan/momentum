const greetings = [
  "{name}님, 오늘도 힘찬 하루를 시작해볼까요?",
  "어떤 날보다도 {name}님이 빛나는 하루가 되길 바랍니다.",
  "{name}님, 오늘 하루도 자신을 믿고 전진하세요.",
  "힘든 순간일수록 {name}님의 강인함이 빛을 발합니다.",
  "오늘도 {name}님의 미소로 세상을 밝혀주세요.",
  "{name}님, 작은 성공들이 모여 큰 기쁨이 됩니다.",
  "하루하루가 {name}님을 위한 소중한 선물이에요.",
  "{name}님, 오늘의 노력이 내일의 당신을 만듭니다.",
  "힘들어도 항상 {name}님 편인 시간이 있습니다. 오늘이 바로 그 날이에요.",
  "{name}님, 오늘 하루도 용기를 내세요. 당신은 할 수 있어요.",
  "잠시 숨을 고르고 {name}님만의 속도로 전진하세요.",
  "{name}님, 오늘 하루는 어제와 다른 새로운 시작입니다.",
  "어떤 일이 있어도 {name}님의 가치는 변하지 않습니다.",
  "오늘도 {name}님을 위한 새로운 기회가 가득합니다.",
  "모든 순간이 {name}님을 성장시키는 귀중한 경험이에요.",
  "{name}님, 자신의 감정을 소중히 여기세요.",
  "오늘 {name}님이 만든 선택이 내일을 만듭니다.",
  "{name}님, 오늘 하루도 최선을 다하는 당신이 최고에요.",
  "작은 발걸음이 모여 {name}님을 위대한 곳으로 이끕니다.",
  "기억하세요, {name}님은 항상 충분히 가치 있는 사람입니다.",
  "{name}님, 오늘 하루도 당신의 이야기를 만들어 가세요.",
  "어려움 속에서도 {name}님의 빛나는 장점을 잊지 마세요.",
  "{name}님, 당신의 꿈을 향해 한 걸음 더 나아가세요.",
  "오늘 하루 {name}님의 작은 성취를 축하해요.",
  "모든 시작은 두렵지만, {name}님은 충분히 멋진 사람입니다.",
  "{name}님, 오늘도 감사하는 마음으로 하루를 시작해보세요.",
  "당신의 여정은 {name}님만의 소중한 이야기입니다.",
  "{name}님, 오늘 하루도 당신을 응원합니다.",
  "자신감을 가지세요, {name}님. 당신은 어떤 일도 해낼 수 있어요.",
  "{name}님, 오늘 하루도 당신만의 색깔로 물들여 보세요."
];

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';


// form submit event
function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);

	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);

	paintGreetings();
}

loginForm.addEventListener('submit', onLoginSubmit);


//
function paintGreetings() {
	const username = localStorage.getItem(USERNAME_KEY);
	let greet = greetings[Math.floor(Math.random() * greetings.length)];
	greet = greet.replace("{name}", username);

	greeting.innerText = `${greet}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}


// local storage
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	paintGreetings();
}