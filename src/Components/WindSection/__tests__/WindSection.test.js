import React from 'react'
import { cleanup, render } from '@testing-library/react'
import WindSection from '../WindSection';

describe('Components | <WindSection /> with data', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<WindSection wind="5 km/h" windDirection="SW" />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})

describe('Components | <WindSection /> with no data', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<WindSection />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})