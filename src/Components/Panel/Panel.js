import React, { Component } from 'react';
import ActionButton from '../ActionButton/ActionButton.js';
import TemperatureSection from '../TemperatureSection/TemperatureSection.js';
import SnowSection from '../SnowSection/SnowSection.js';
import * as data from '../../data.json';
import {
    showLocalNotification,
    requestNotificationPermission,
    revokePermission,
    hasPermission
} from '../../utils';

class Panel extends Component {
    constructor() {
        super();
        this.state = {
            hasPermission: false
        }
    }

    async componentDidMount() {
        const permission = await hasPermission();
        this.setState({
            hasPermission: permission
        })
    }

    subscribeUser = () => {
        requestNotificationPermission().then(permission => {
            if (permission === "granted") {
                showLocalNotification("Welcome to Revy Powda", "Hey there")
                this.setState({
                    hasPermission: true
                })
            }
        });
    }

    unsubscribeUser = async () => {
        if (this.state.hasPermission) {
            await revokePermission();
            this.setState({
                hasPermission: false
            })
        }
    }

    render() {
        return (
            <section className="panel">
                <div>
                    <h1 className="panel__title">RevyPow</h1>
                </div>
                <SnowSection data={data.freshSnow} />
                <TemperatureSection data={data.temperatures} />
                <div>
                    Updated: {data.dateUpdated.value}
                </div>
                <ActionButton isSubscribed={this.state.hasPermission} onClick={this.state.hasPermission ? this.unsubscribeUser : this.subscribeUser} />
            </section>
        );
    }

}

export default Panel;
