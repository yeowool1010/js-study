const clock = document.querySelector("h2#clock")

// clock.innerText = "lalall"

function getDate() {
    const date = new Date()

    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
//    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

// 5초마다 함수 실행시키기
// 두 개를 받음 실행 함수와 뒤에 반복할 초
getDate()
setInterval(getDate, 1000)

// 5초뒤에 실행
// setTimeout(sayHello, 5000)

