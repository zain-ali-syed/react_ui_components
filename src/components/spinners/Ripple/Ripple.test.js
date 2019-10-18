import React from 'react'
import Ripple from './Ripple'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Ripple />).toJSON()
  expect(tree).toMatchSnapshot()
})
