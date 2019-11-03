import React from 'react';
import Temperature from './Temperature';

const TemperatureSection = (props) => {
    return (
        <section className="temperature-section">
            {props.data.map(temp => {
                return <Temperature
                    key={temp.title}
                    title={temp.title}
                    subtitle={temp.subtitle}
                    value={temp.value} />
            })}
        </section>
    );
}

export default TemperatureSection;
