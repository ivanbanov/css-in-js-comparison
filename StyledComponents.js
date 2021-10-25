import React from 'react'
import styled, { /*, css*/ } from '@xstyled/styled-components'
import { system, backgrounds, color, space } from '@xstyled/system'
import { styledComponentsVariant as variant } from './xstyled'


const Button = styled.button(
  {
    border: '1px solid',
    padding: 'small',
    cursor: 'pointer',
    margin: 'small',
  },
  variant({
    prop: 'foo',
    default: 'warning',
    variants: {
      error: {
        color: 'error',
        padding: 'small',
      },
      success: {
        color: 'success',
        padding: 'medium',
      },
      info: {
        color: 'info',
        padding: 'large',
      },
      warning: {
        backgroundColor: 'warning',
      }
    }
  }),
  variant({
    prop: 'ghost',
    default: 'false',
    variants: {
      true: {
        opacity: .3
      }
    }
  }),

  // --- variants alternative ---
  // ({ ghost }) => ghost && css({
  //   opacity: .3,
  // }),

  // --- system props ---
  // backgrounds,
)


const Child = styled.div({}, color, space)
const Box = styled.div({
  boxSizing: 'border-box',
  [Child]: { color: 'success' },
}, system)

const Flex = props => (
  <Box
    display='flex'
    alignItems='flex-start'
    {...props}
  />
)

export default function App() {
  return (
    <>
      <h2>Styled Components</h2>

      <Flex>
        <Button backgroundColor='pink'>can only add enabled props</Button>
        <Button ghost>ghost</Button>
        <Button foo='error'>error</Button>
        <Button foo='success'>success</Button>
        <Button foo='info'>info</Button>
      </Flex>

      <Box borderBottom='1px solid'>
        <Child>child component selector</Child>
      </Box>
    </>
  )
}
