import React from 'react';
import SubscribeSwitch from '../SubscribeSwitch/SubscribeSwitch';

const Footer = (props) => {
    const { hasPermission, data, unsubscribeUser, subscribeUser } = props
    return (
        <div className="footer">
            <SubscribeSwitch isSubscribed={hasPermission} onClick={hasPermission ? unsubscribeUser : subscribeUser} />
            {data && data.dateUpdated &&
                <div className="footer__date">
                    <div>Last updated</div>
                    <div>{data.dateUpdated.value}</div>
                </div>
            }
        </div>
    )
}

export default Footer;