import React from 'react';

const SnowSection = (props) => {
    return (
        <div className="snowsection">
            <h3 className="snowsection__title">Fresh snow</h3>
            <span className="snowsection__value">{props.data.value} cm</span>
        </div>
    );
}

export default SnowSection;
