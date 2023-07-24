// const loginForm = document.getElementById("login-form")
// const loginInput = loginForm.querySelector("input")
// const loginBtn = loginForm.querySelector("button")

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const greeting =  document.querySelector("#greeting")

// 문자열만 담은 변수 중요한것은 대문자로 표기
const HIDDEN_CLASS_NAME = "hidden"
const USERNAME_KEY = "userName"

function onClickLogin(e) {
    e.preventDefault();
    const userName = loginInput.value

    localStorage.setItem(USERNAME_KEY, userName)

    // if(userName === "") {
    //     alert("お名前を入力してください。")
    // } else if(userName.length > 15) {
    //     alert("お名前を短くて入力してください。\n 最大15")
    // }
    // console.log(userName);
    loginForm.classList.add(HIDDEN_CLASS_NAME)
    // greeting.innerText = "いらっしゃいませ" + userName + "様"
    greeting.innerText = `いらっしゃいませ ${userName} 様`
   
    greeting.classList.remove(HIDDEN_CLASS_NAME)

}

function paintGreeting (username) {

    greeting.innerText = `いらっしゃいませ ${username} 様`
    greeting.classList.remove(HIDDEN_CLASS_NAME)
    
}

// loginBtn.addEventListener("click", onClickLogin)
// loginForm.addEventListener("submit",onClickLogin)

const Link = document.querySelector("a")

function onClickLink (e) {
    // 이벤트를 멈춘다 멈추게 하는 이유는?
    e.preventDefault();
    console.dir(e)
    alert("クリック")
    // alert은 모든 활동을 잠시 홀딩한다.
}

Link.addEventListener("click", onClickLink)

const itsUser = localStorage.getItem(USERNAME_KEY)
// console.log(itsUser);

if(itsUser === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME)
    loginForm.addEventListener("submit", onClickLogin)
} else {
    // greeting.innerText = `いらっしゃいませ ${itsUser} 様`
    // greeting.classList.remove(HIDDEN_CLASS_NAME)
    paintGreeting(itsUser)
}