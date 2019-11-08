import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Loading from '../Loading';

describe('Components | <Loading />', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<Loading />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})