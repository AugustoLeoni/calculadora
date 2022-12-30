let number1 = Number(prompt("Digite o primeiro número:"))
let number2 = Number(prompt("Digite o segundo número:"))

let sum = number1 + number2
let sub = number1 - number2
let mul = number1 * number2
let div = number1 / number2
let rest = number1 % number2

if((sum % 2) === 0) {
  oddOrEven = `A soma dos dois números é ${sum} e ele é par`
} else {
  oddOrEven = `A soma dos dois números é ${sum} e ele é ímpar`
}

if(number1 === number2) {
  differentOrSame = "iguais"
} else {
  differentOrSame = "diferentes"
}

if(number2 === 0) {
  notDivZeroRest = "Não é possivel dividir o numero por 0"
  notDivZero = "Não é possivel dividir o numero por 0"
} else if (number2 !== 0){
  notDivZeroRest = `O resto da divisão dos dois números é ${rest}`
  notDivZero = `O resto da divisão dos dois números é ${div}`
} else {
  notDivZeroRest = "Não é possivel dividir por 0"
  notDivZero = "Não é possivel dividir por 0"
}

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${mul}`)
alert(notDivZero)
alert(notDivZeroRest)
alert(oddOrEven)
alert(`Os números inseridos são ${differentOrSame}`)


