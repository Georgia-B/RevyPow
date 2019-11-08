import React from 'react';

const ContentSection = (props) => {
    return (
        <section className={props.className ? `content-section ${props.className}` : "content-section"}>
            {props.children}
        </section>
    );
}

export default ContentSection;
