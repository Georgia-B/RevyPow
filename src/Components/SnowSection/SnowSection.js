import React from 'react';

const SnowSection = (props) => {
    return (
        <div className="snowsection">
            <h3 className="snowsection__title">{props.data.title}</h3>
            <span className="snowsection__value">{props.data.value} cm</span>
        </div>
    );
}

export default SnowSection;
