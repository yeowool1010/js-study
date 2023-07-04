const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보
const Operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보

function calculate(n1, operator, n2) {
  let result = 0;
  // n1 = firstOperend.textContent;
  // n2 = secondOperend.textContent;
  // operator = Operator.textContent;

  // 1. operator가 +일 때 n1과 n2를 더한다
  // 2. operator가 -일 때 n1에서 n2를 뺀다
  // 3. operator가 *일 때 n1과 n2를 곱한다
  // 4. operator가 /일 때 n1과 n2를 나눈다
  if(operator === "+") {
    result = Number(n1) + Number(n2);
  } else if(operator === "-") {
    result = Number(n1) - Number(n2);
  } else if(operator === "*") {
    result = Number(n1) * Number(n2);
  } else if(operator === '/') {
    result = Number(n1) / Number(n2);
  }
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옴
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옴
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number' && firstOperend.textContent === "0") {

      firstOperend.textContent = buttonContent;
      // console.log(firstOperend);
      console.log('숫자 ' + buttonContent + ' 버튼');
    } else if(action === 'number') {
      secondOperend.textContent = buttonContent;
      // n2 = buttonContent;
    }

    if (action === 'operator') {
      Operator.textContent = buttonContent;
      // operator = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    if (action === 'decimal') {

      console.log('소수점 버튼');
    }

    if (action === 'clear') {
      firstOperend.textContent = "0";
      secondOperend.textContent = "0";
      Operator.textContent = "+";
      calculatedResult.textContent = "0";
      console.log('초기화 버튼');
    }

    if (action === 'calculate') {
      calculatedResult.textContent = calculate(
        firstOperend.textContent,
        Operator.textContent,
        secondOperend.textContent );
      console.log('계산 버튼');
    }
  }
});
