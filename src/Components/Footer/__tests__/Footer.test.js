import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Footer from '../Footer';

describe('Components | <Footer /> when user subscribed', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<Footer
            hasPermission={true}
            data={{ dateUpdated: "yesterday" }}
            subscribeUser={() => true}
            unsubsribeUser={() => true}
        />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})

describe('Components | <Footer /> when user not subscribed', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<Footer
            hasPermission={false}
            data={{ dateUpdated: "yesterday" }}
            subscribeUser={() => true}
            unsubsribeUser={() => true}
        />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})