import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'

// C O M P O N E N T S
import App from './App'
import { Icon } from '@anynines/design-system'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  it('should contain a title', () => {
    expect(wrapper.find('h1').exists()).toBe(true)
  })

  it('should contain an Icon', () => {
    expect(wrapper.find(Icon).exists()).toBe(true)
  })
})
