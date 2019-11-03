import React from 'react';

const ActionButton = (props) => {
    const label = props.isSubscribed ? "You are subscribed to notifications"
        : "Get the morning snow report";

    const buttonText = props.isSubscribed ? "Unsubscribe" : "Subscribe";
    const buttonClass = props.isSubscribed ? "button" : "button button--sentiment-positive"

    return (
        <div className="action">
            <div className="action__label">{label}</div>
            <button
                className={buttonClass}
                onClick={props.onClick}>
                {buttonText}
            </button>
        </div>
    );
}

export default ActionButton;