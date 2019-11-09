import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Panel from '../Panel';


const testData = {
    temperatures: [
        {
            title: "Subpeak",
            subtitle: "2000m",
            value: "2"
        }
    ],
    wind: {
        title: "windspeed",
        value: "5"
    },
    base: {
        title: "Base snow",
        value: "40"
    },
    newSnow: {
        title: "Fresh snow",
        value: "2"
    },
    dateUpdated: {
        value: "yesterday"
    }
}

describe('Components | <Panel /> with no data', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<Panel />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})

describe('Components | <Panel /> with data', () => {
    afterEach(cleanup);
    it('should render correctly', () => {
        const component = render(<Panel data={testData} />);
        expect(component.asFragment()).toMatchSnapshot();
    })
})