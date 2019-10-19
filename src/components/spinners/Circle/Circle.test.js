import React from 'react'
import Circle from './Circle'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Circle />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(2 + 2).toBe(5)
})
