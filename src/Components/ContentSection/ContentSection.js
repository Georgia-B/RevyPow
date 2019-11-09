import React from 'react';

const ContentSection = (props) => {
    return (
        <section className={props.className ? `content-section ${props.className}` : "content-section"}>
            <img className="content-section__icon" src={props.image} alt={props.alt} />
            {props.children}
            <div className="content-section__spacer"></div>
        </section>
    );
}

export default ContentSection;
