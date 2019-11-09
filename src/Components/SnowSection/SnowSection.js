import React from 'react';

const SnowSection = (props) => {
    if (!props.data) {
        return null;
    }
    return (
        <div className={props.className ? `snowsection ${props.className}` : "snowsection"}>
            <h3 className="snowsection__title">{props.data.title}</h3>
            <span className="snowsection__value">{props.data.value}{!props.noUnit && " cm"}</span>
        </div>
    );
}

export default SnowSection;
