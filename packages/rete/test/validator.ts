import { Validator } from '../src/core/validator'
import assert from 'assert'

describe('Validator', () => {
  it('validate id ', () => {
    assert.ok(Validator.isValidId('demo@0.0.0'))
    assert.ok(!Validator.isValidId('demo@0.0g.0'))
  })

  it('validate', () => {
    const id = 'demo@0.1.0'
    const data = { id: 'demo@0.0.0', nodes: {} }

    assert.ok(!Validator.validate(id, data).success)
  })
})
