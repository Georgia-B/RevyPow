import React from 'react';

const WindSection = (props) => {
    if (!props.wind) {
        return null;
    }
    return (
        <div className="weather-section__wind">
            <h3 className="weather-section__direction">{props.windDirection}</h3>
            <h1 className="weather-section__value">{props.wind}</h1>
            <div>winds</div>
        </div>
    );
}

export default WindSection;
