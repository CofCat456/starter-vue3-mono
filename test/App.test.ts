import { describe, expect, it } from 'vitest'

import { foo } from '@pkgName/index'

describe('foo', () => {
  it('should exported', () => {
    expect(foo).toBe(1)
  })
})
