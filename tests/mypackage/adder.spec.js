/* eslint-env mocha */

describe('adder', () => {
  const assert = require('chai').assert
  const adder = require('../../libs/yehhongming/adder')
  it('adds two numbers', () => {
    assert.equal(adder.add(1, 1), 2)
  })
})
