const MIN_STEP = 0

export function isStartInvalid(start) {
  if (start === '') return true
  return false
}

export function isEndInvalid(end) {
  if (end === '') return true
  return false
}

export function isStepInvalid(step) {
  const numberStep = Number(step)
  if (step === '') return true
  if (numberStep === MIN_STEP ||numberStep < MIN_STEP) return true
  return false
}
