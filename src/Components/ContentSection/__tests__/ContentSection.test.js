import React from 'react'
import { cleanup, render } from '@testing-library/react'
import ContentSection from '../ContentSection';

describe('Components | <ContentSection /> with custom class', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(
            <ContentSection className="testclass">
                <h1>Hello World</h1>
            </ContentSection>);
        expect(component.asFragment()).toMatchSnapshot();
    })
})

describe('Components | <ContentSection /> with no class', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(
            <ContentSection>
                <h1>Hello World</h1>
            </ContentSection>);
        expect(component.asFragment()).toMatchSnapshot();
    })
})