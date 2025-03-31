//숫자를 나타낼 화면 
const mathDisplay = document.querySelector('.numbuerbox')
//숫자와 도트 버튼 전부 선택
const numberAndDotButton = document.querySelectorAll('.numberbutton, .number0button, .numberdotbutton')
//연산자 버튼 모두 선택 
const calculationButton = document.querySelectorAll('.opbutton')
//계산 버튼
const ecolButton = document.querySelector('.ecolbutton')
//리셋 버튼
const delButton = document.querySelector('.c-button')
//확장
const widthbutton = document.querySelector('.top-button3')
//축소
const returnbutton = document.querySelector('.top-button2')
//플러스와 마이너스로 바꾸는 버튼
const pmButton = document.querySelector('.pm-button')
//모아서 처리할 변수
const allbutton = document.querySelectorAll('button')

let secondOperand = '0'
let operator = ''
let firstOperand = ''
mathDisplay.textContent = secondOperand

numberAndDotButton.forEach(button => {
    button.addEventListener('click',() => {
        if(secondOperand === '0' && button.textContent === '.'){
            secondOperand = '0'
        } else if (secondOperand === '0'){
            secondOperand = ''
        }
        secondOperand += button.textContent
        mathDisplay.textContent = secondOperand
    })
});

delButton.addEventListener('click',() => {
    secondOperand = '0'
    operator = ''
    firstOperand = ''
    mathDisplay.textContent = secondOperand
})

pmButton.addEventListener('click',() => {
    secondOperand = String(parseFloat(secondOperand)* -1)
    mathDisplay.textContent = secondOperand
    if (mathDisplay.textContent == 'NaN'){
        mathDisplay.textContent = 'Error'
    }
})

calculationButton.forEach(button => {
    button.addEventListener('click', () => {
        if(secondOperand === '') return
        if(firstOperand !== ''){
            calculate()
        }
        operator = button.textContent
        firstOperand = secondOperand
        secondOperand= ''
        console.log(`firstOperand : ${firstOperand}     operator : ${operator}   secondOperand : ${secondOperand} `) 
    })
})

function calculate(){
    let all = 0
const numberPart1 = parseFloat(firstOperand)
const numberPart2 = parseFloat(secondOperand)

if(isNaN(numberPart1)||isNaN(numberPart2)) {
 mathDisplay.textContent = 'Error'
 return
}
switch(operator){
    case'+': all = numberPart1 + numberPart2
        break
    case'-': all = numberPart1 - numberPart2
        break
    case'*': all = numberPart1 * numberPart2
        break
    case'/': 
        if(numberPart2 === 0){ 
            mathDisplay.textContent = 'Error'; return }
            all = numberPart1 / numberPart2
        break
    case'%': all = numberPart1 % numberPart2
        break
    default: return
}
firstOperand =''
secondOperand = String(all)
operator = ''
mathDisplay.textContent = all

}

ecolButton.addEventListener('click',() => {
 if(firstOperand !== '' && secondOperand !== ''){
    calculate()
 }
})


allbutton.forEach(button => {
    button.addEventListener('click',()=>{
        button.classList.add('shake')
        setTimeout(()=>{
            button.classList.remove('shake')
        },500)
    })
})

    widthbutton.addEventListener('click',()=>{
    document.querySelector('.all').classList.add('all2')
    })        
returnbutton.addEventListener('click',()=>{
    document.querySelector('.all').classList.remove('all2')
})

