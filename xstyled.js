import { getThemeValue, merge, warn, is, assign } from '@xstyled/util'
import { css } from '@xstyled/styled-components'

export const theme = {
  colors: {
    error: 'var(--colors-error)',
    success: 'var(--colors-success)',
    info: 'var(--colors-info)',
    warning: 'var(--colors-warning)',
    off: 'var(--colors-off)',
  },
  space: {
    small: 'var(--space-small)',
    medium: 'var(--space-medium)',
    large: 'var(--space-large)'
  }
}

export const styledComponentsVariant = ({
  key = null,
  default: defaultValue,
  variants = {},
  prop = 'variant',
}) => props => {
  const themeVariants = is(key) ? getThemeValue(props, key) : null
  const computedVariants = merge(assign({}, variants), themeVariants)
  const cssComputedVariants = Object
    .entries(computedVariants)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: css(value) }), {})
  const value = props[prop] !== undefined ? props[prop] : defaultValue
  const result = getThemeValue(props, value, cssComputedVariants)
  return result
}

export const variant = ({
  key = null,
  default: defaultValue,
  variants = {},
  prop = 'variant',
}) => props => {
  const themeVariants = is(key) ? getThemeValue(props, key) : null
  const computedVariants = merge(assign({}, variants), themeVariants)
  const value = props[prop] !== undefined ? props[prop] : defaultValue
  const result = getThemeValue(props, value, computedVariants)
  return result
}