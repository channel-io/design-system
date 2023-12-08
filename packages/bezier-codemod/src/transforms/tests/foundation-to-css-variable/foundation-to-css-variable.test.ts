import { testTransformFunction } from '../../../utils/test.js'
import borderTransform from '../../foundation-to-css-variable-border.js'
import elevationTransform from '../../foundation-to-css-variable-elevation.js'
import roundingTransform from '../../foundation-to-css-variable-rounding.js'
import themeTransform from '../../foundation-to-css-variable-theme.js'
import transitionTransform from '../../foundation-to-css-variable-transition.js'

describe('theme transform', () => {
  it('should transform foundation to css variable', () => {
    testTransformFunction('theme', themeTransform)
  })
})

describe('rounding transform', () => {
  it('should transform foundation to css variable', () => {
    testTransformFunction('rounding', roundingTransform)
  })
})

describe('border transform', () => {
  it('should transform foundation to css variable', () => {
    testTransformFunction('border', borderTransform)
  })
})

describe('elevation transform', () => {
  it('should transform foundation to css variable', () => {
    testTransformFunction('elevation', elevationTransform)
  })
})

describe('transition transform', () => {
  it('should transform foundation to css variable', () => {
    testTransformFunction('transition', transitionTransform)
  })
})
