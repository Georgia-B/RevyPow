import React from 'react'
import { cleanup, render } from '@testing-library/react'
import SnowSection from '../SnowSection';

describe('Components | <SnowSection /> with data', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<SnowSection data={{ title: "Base", value: "15" }} />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})

describe('Components | <SnowSection /> with no data', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<SnowSection />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})