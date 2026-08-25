import { isStartInvalid, isStepInvalid } from "./validation.js"

export function execute() {
  const start = window.document.getElementById('start').value
  const end = Number(window.document.getElementById('end').value)
  let stepNumber = window.document.getElementById('stepNumber').value
  const result = window.document.getElementById('result')

  if (isStartInvalid(start)) {
    result.innerHTML = 'Impossivel contar'
    return
  }
  if (isStepInvalid(stepNumber)) {
    
    window.alert('Para comecar digite um numero ')
  }
} 


if (typeof window !== 'undefined') {
  window.execute = execute
}
  
