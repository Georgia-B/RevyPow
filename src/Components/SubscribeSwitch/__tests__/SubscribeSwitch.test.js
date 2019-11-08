import React from 'react'
import { cleanup, render } from '@testing-library/react'
import SubscribeSwitch from '../SubscribeSwitch';

describe('Components | <SubscribeSwitch /> when subscribed', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<SubscribeSwitch isSubscribed={true} onClick={() => true} />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})

describe('Components | <SubscribeSwitch /> when not subscribed', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<SubscribeSwitch isSubscribed={false} onClick={() => true} />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})