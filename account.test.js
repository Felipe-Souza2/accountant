import assert from "node:assert"
import test from "node:test"

import { isStartInvalid, isSteptInvalid } from "./validation.js"

test("deve verificar se o start é invalido", () => {
  assert.equal(isStartInvalid(''),true)
})

test("deve verificar se step é  invalido", () => {
  assert.equal(isSteptInvalid(0), true)
  assert.equal(isSteptInvalid(''), true)
})

// test("deve verificar se start é  valido", () => {
//   assert.equal(isStartInvalid(1), false)
//   assert.equal(isStartInvalid(0), false)
// })

// test("deve verificar se step é  valido", () => {
//   assert.equal(isStepInvalid(1), false)
//   assert.equal(isStepInvalid(''), false)
// })






if (typeof window !== 'undefined') {
  window.execute = execute
}