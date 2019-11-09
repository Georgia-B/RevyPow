import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Header from '../Header';

describe('Components | <Header />', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<Header />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})