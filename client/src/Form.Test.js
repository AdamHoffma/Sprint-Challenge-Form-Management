import React from 'react'
import * as rtl from '@testing-library/react'

import ThisForm from './Form.js'


it('renders a button with the text submit', () => {
    const wrapper = rtl.render(
        <ThisForm/>
    )
    const element = wrapper.queryByText(/username/i)
    expect(element).toBeVisible()
})