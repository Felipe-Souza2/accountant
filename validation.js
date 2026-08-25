const MIN_STEP = 0

export function isStartInvalid(start) {
  if (start === '') return true
  return false
}

export function isStepInvalid(step) {
  if (step === '') return true
  if (step === '0' || step ===Number('0')) return true
  if (step === MIN_STEP || step < MIN_STEP) return true
  
  return false
}
