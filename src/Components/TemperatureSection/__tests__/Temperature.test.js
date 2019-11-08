import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Temperature from '../Temperature';

describe('Components | <Temperature /> with data', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<Temperature title="Subpeak" subtitle="1200m" value="2" />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})

describe('Components | <Temperature /> with no data', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<Temperature />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})