import React from 'react'
import { Button } from '@storybook/react/demo'
import { storiesOf } from '@storybook/react'
import { Ripple, Circle, Heart } from '../'

const Center = ({ children }) => (
  <div style={{ textAlign: 'center' }}>{children}</div>
)

storiesOf('React CSS Spinners', module)
  .add('Ripple', () => <Ripple />, {
    notes: 'A very simple Ripple Spinner'
  })
  .add('Heart', () => <Heart />)
  .add('Circle', () => <Circle />)

storiesOf('React Buttons', module).add('Button', () => <Button />)