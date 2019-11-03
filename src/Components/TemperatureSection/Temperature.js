import React from 'react';

const Temperature = (props) => {
    return (
        <div key={props.title} className="temperature">
            <div>
                <h3 className="temperature__title">{props.title}</h3>
                <span>{props.subtitle}</span>
            </div>
            <div className="temperature__value">
                {props.value} <span className="temperature__unit">&deg;C</span>
            </div>
        </div>
    );
}

export default Temperature;
