import React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { system, color, space } from '@xstyled/system'
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
  ({ ghost }) => ghost && css({
    opacity: .3,
    padding: 'medium',
  }),
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

const Extended = styled(Box)({
  color: 'success'
})


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

      <Extended>Extended component</Extended>

      <Box borderBottom='1px solid'>
        <Child color='error'>Child component selector</Child>
      </Box>
    </>
  )
}