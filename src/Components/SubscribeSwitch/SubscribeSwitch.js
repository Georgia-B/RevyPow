import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SubscribeSwitch = (props) => {
    return (
        <div className="subscribe__container">
            <FormControlLabel
                control={
                    <Switch
                        checked={props.isSubscribed}
                        onChange={props.onClick}
                        value={props.isSubscribed}
                        color="secondary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                }
                label="Notifications"
            />
            {props.isSubscribed && <div className="subscribe__message">
                You are subscribed to the morning snow report.
            </div>}
        </div>
    );
}

export default SubscribeSwitch;