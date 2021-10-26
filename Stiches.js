import React from 'react'
import { styled } from './stiches.config'

const Button = styled(
  'button',
  {
    border: '1px solid',
    padding: '$small',
    cursor: 'pointer',
    margin: '$small',
    variants: {
      foo: {
        error: {
          color: '$error',
          padding: '$small',
        },
        success: {
          color: '$success',
          padding: '$medium',
        },
        info: {
          color: '$info',
          padding: '$large',
        },
        warning: {
          backgroundColor: '$warning',
        }
      },
      ghost: {
        true: {
          opacity: .3,
          padding: '$medium',
        }
      }
    },
    defaultVariants: {
      foo: 'warning'
    }
  },
)

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
})

const Child = styled('div')
const Box = styled('div', {
  boxSizing: 'border-box',
  [Child]: { color: '$success' }
})

const Extended = styled(Box, {
  color: '$success'
})

export default () => (
  <>
    <h2>Stiches</h2>

    <Flex>
      <Button css={{ backgroundColor: '$off' }}>can add any custom</Button>
      <Button ghost>ghost</Button>
      <Button foo='error'>error</Button>
      <Button foo='success'>success</Button>
      <Button foo='info'>info</Button>
    </Flex>

    <Extended>Extended component</Extended>

    <Box css={{ borderBottom: '1px solid' }}>
      <Child>Child component selector</Child>
    </Box>
  </>
)
