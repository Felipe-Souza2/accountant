export function isStartInvalid(start) {
  if (start === '') return true
}

export function isStepInvalid(step) {
  if (step === 0) return true
  if (step === '') return true
}

export function execute() {
  const start = Number(window.document.getElementById('start').value)
  const end = Number(window.document.getElementById('end').value)
  const stepNumber = Number(window.document.getElementById('stepNumber').value)
  
  if (isStartInvalid == 1) return true

}