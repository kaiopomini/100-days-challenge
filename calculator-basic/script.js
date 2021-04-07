const tableEl = document.querySelector('table')
const buttonsEl = tableEl.querySelectorAll('input')
const expressionEl = document.getElementById('expression')

const resultEl = document.getElementById('result')

let newValue = 0
let parseResult = 0
let lastOperator = ''
let toggleOperator = true


function calc(parseResult, newValue, operator ) {
  let result = 0
  if (operator === '-') {
    result = parseResult - newValue
  }
  if (operator === '+') {
    result = parseResult + newValue
  }
  if (operator === '*') {
    result = result = parseResult * newValue
  }
  if (operator === '/') {
    result = parseResult / newValue
  }
  if (operator === '') {
    result = newValue
  }
  if (operator === '=') {
    result = parseResult
  }

  return result
}


function getBtnValue(e) {
  if (e.className === 'number') {
    if (toggleOperator) {
      resultEl.value = 0
      toggleOperator = false
    }
    if(e.value === '.'){
      resultEl.value += e.value
    } else {
      resultEl.value =`${resultEl.value == '0' ? '' : resultEl.value}${parseFloat(e.value)}`
    }
    

  } else if (e.className === 'operator') {
    
    if (e.value === 'C') {
      newValue = 0
      parseResult = 0
      lastOperator = ''
      toggleOperator = true
      resultEl.value = 0
      expressionEl.innerText = ''
    } else if(e.value === 'CE') {
      resultEl.value = 0

    }else if(e.value === '<'){
      if (resultEl.value.length > 1) {
        resultEl.value = resultEl.value.slice(0, -1)
      } else {
        resultEl.value = 0
      }
    } else if(e.value === '+/-'){

      if (resultEl.value.charAt(0) === '-') {
        resultEl.value = resultEl.value.slice(1)
      } else {
        resultEl.value = `-${resultEl.value}`
      }

    
    } else {

      if(!(e.value === lastOperator && toggleOperator )){

        newValue = parseFloat(resultEl.value)
        parseResult = calc(parseResult, newValue, lastOperator)
        resultEl.value = parseResult
        if (e.value === '=' && lastOperator === '=') {
          resultEl.value = newValue
          parseResult = newValue
          console.log('entrou')
        }
  
        toggleOperator = true
        lastOperator = e.value
  
        expressionEl.innerText = `${parseResult} ${e.value}`
        newValue = 0

      }
    }

  }

}

buttonsEl.forEach(e => {
  e.addEventListener('click', e => {
    getBtnValue(e.target)
  })
})

