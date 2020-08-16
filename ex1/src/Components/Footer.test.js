import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'
 
it('It should render customer phone number', () => {
const wrapper = shallow(<Footer />)
const span = wrapper.find('span')
const result = span.text()

expect(result).toBe('Customer Service: 1-888-555-434')
})