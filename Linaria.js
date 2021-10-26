import React from 'react'
import { styled } from '@linaria/react'
import theme from './theme.js'

const buttonStyles = {
  error: {
    color: theme.colors.error,
    padding: theme.space.small,
  },
  success: {
    color: theme.colors.success,
    padding: theme.space.medium,
  },
  info: {
    color: theme.colors.info,
    padding: theme.space.large,
  },
  warning: {
    backgroundColor: theme.colors.warning,
  }
}

const defaultFoo = 'warning'

const Button = styled.button`
  border: 1px solid;
  cursor: pointer;
  margin: ${theme.space.small};
  background-color: ${({ foo }) => (
    buttonStyles[foo || defaultFoo].backgroundColor || ''
  )};
  color: ${({ foo }) => buttonStyles[foo || defaultFoo].color};
  padding: ${({ foo, ghost }) => {
    const fooStyle = buttonStyles[foo || defaultFoo].padding
      || theme.space.small

    const ghostStyle = theme.space.medium

    return ghost ? ghostStyle : fooStyle
  }};
  opacity: ${({ ghost }) => ghost && .3};
`

const Flex = styled.div`
  display: flex;
  align-items: flex-start;
`

const Child = styled.div``
const Box = styled.div`
  box-sizing: border-box;

  ${Child} {
    color: ${theme.colors.success};
  }
`

const Extended = styled(Box)`
  color: ${theme.colors.success};
`

export default () => (
  <>
    <h2>Linaria</h2>

    <Flex>
      <Button style={{ backgroundColor: theme.colors.off }}>can add any custom</Button>
      <Button ghost>ghost</Button>
      <Button foo='error'>error</Button>
      <Button foo='success'>success</Button>
      <Button foo='info'>info</Button>
    </Flex>
    <small>(some css props wont rely on their native default)</small>

    <Extended>Extended component</Extended>

    <Box style={{ borderBottom: '1px solid' }}>
      <Child>Child component selector</Child>
    </Box>
  </>
)