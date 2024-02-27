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

	greeting.innerText = `Hello ${username}`;
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