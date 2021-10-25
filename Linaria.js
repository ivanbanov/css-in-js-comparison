import React from 'react'
import { styled } from '@linaria/react'
import theme from './theme.js'

const Button = styled.button`
  border: 1px solid;
  padding: ${theme.space.small};
  cursor: pointer;
  margin: ${theme.space.small};
`

export default () => (
  <>
    <h2>Linaria</h2>
    <Button>Hello world</Button>
  </>
)
