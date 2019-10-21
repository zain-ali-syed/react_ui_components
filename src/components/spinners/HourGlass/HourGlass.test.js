import React from 'react'
import HourGlass from './HourGlass'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<HourGlass />).toJSON()
  expect(tree).toMatchSnapshot()
})
