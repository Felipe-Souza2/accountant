import assert from "node:assert"
import test from "node:test"

import { calculateSteps } from "./script.js"
import { isStartInvalid, isStepInvalid, isEndInvalid } from "./validation.js"

test("deve verificar se o start é invalido", () => {
  assert.equal(isStartInvalid(''),true)
})

test("deve verificar se o end é invalido", () => {
  assert.equal(isEndInvalid(''),true)
})

test("deve verificar se step é  invalido", () => {
  assert.equal(isStepInvalid(0), true)
  assert.equal(isStepInvalid(''), true)
  assert.equal(isStepInvalid(-10), true)
  assert.equal(isStepInvalid('0'), true)
})

test("deve verificar se start é  valido", () => {
  assert.equal(isStartInvalid(1), false)
  assert.equal(isStartInvalid(0), false)
  assert.equal(isStartInvalid(-2), false)
  assert.equal(isStartInvalid('-10'), false)
})

test("deve verificar se o end e valido", () => {
  assert.equal(isEndInvalid(-2), false)
  assert.equal(isEndInvalid(10), false)
})

test("deve verificar se step é  valido", () => {
  assert.equal(isStepInvalid(1), false)
  assert.equal(isStepInvalid(3), false)
  assert.equal(isStepInvalid(30), false)
  assert.equal(isStepInvalid('10'), false)

})

test("deve executar a função calculateSteps ", () => {
  assert.deepEqual(calculateSteps(1, 5, 2), [1, 3, 5])
  assert.deepEqual(calculateSteps(1, 10, 2), [1, 3, 5, 7, 9])
  assert.deepEqual(calculateSteps(1, 5, 1), [1, 2, 3, 4, 5])
  assert.deepEqual(calculateSteps(1, 10, 4), [1, 5, 9])
  assert.deepEqual(calculateSteps(5, 1, 2), [5, 3, 1])
  assert.deepEqual(calculateSteps(5, -2, 2), [5, 3, 1, -1])
  assert.deepEqual(calculateSteps(5, 5, 2), [5])
})





