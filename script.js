const STANDARD_STEP = 1
import { isStartInvalid, isStepInvalid, isEndInvalid } from "./validation.js"

export function execute() {
  const start = window.document.getElementById('start').value
  const end = window.document.getElementById('end').value
  let stepNumber = window.document.getElementById('stepNumber').value
  const result = window.document.getElementById('result')
 
  if (isStartInvalid(start)) {
    result.innerHTML = 'Impossivel contar'
    return
  }

   if (Number(stepNumber) === 0 ) {
    stepNumber = STANDARD_STEP
    window.alert('NUMERO 0 NAO E VALIDO sera iniciado com PASSO 1')
  }

  if (isStepInvalid(stepNumber)) {
    window.alert('Para comecar digite um numero ')
    return
  }

  if (isEndInvalid(end)) {
    window.alert('Para terminar digite um numero ')
    return
  }

  const sequenceSteps = calculateSteps(start, end, stepNumber)
  result.innerHTML = `${sequenceSteps}`
} 
  
export function calculateSteps(start, end, stepNumber) {
  const steps = []
  const homeNumber = Number(start)
  const endNumber = Number(end)
  const numberstep = Number(stepNumber)
  
  if (homeNumber < endNumber) {
    for (let current = homeNumber; current <= endNumber; current += numberstep) {
      steps.push(current)
    }
  } else {
    for (let current = homeNumber; current >= endNumber; current -= numberstep) {
      steps.push(current)
    }
  }
   return steps   
}

if (typeof window !== 'undefined') {
  window.execute = execute
}
  
