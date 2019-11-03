import React, { Component } from 'react';
import ActionButton from '../ActionButton/ActionButton.js';
import TemperatureSection from '../TemperatureSection/TemperatureSection.js';
import SnowSection from '../SnowSection/SnowSection.js';
import getData from '../../utils/dataHelper';
import {
    showLocalNotification,
    requestNotificationPermission,
    revokePermission,
    hasPermission
} from '../../utils/permissionHelper';

class Panel extends Component {
    constructor() {
        super();
        this.state = {
            hasPermission: false,
            data: null
        }
    }

    async componentDidMount() {
        const data = await getData();
        const permission = await hasPermission();
        this.setState({
            hasPermission: permission,
            data
        })
    }

    componentDidUpdate(newProps) {
        if (this.props.data !== newProps.data) {
            this.setState({
                data: newProps.data
            })
        }
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
        const { data, hasPermission } = this.state;
        if (!data) {
            return <div>Loading...</div>
        }
        return (
            <section className="panel">
                <div>
                    <h1 className="panel__title">RevyPow</h1>
                </div>
                <SnowSection data={data.newSnow} />
                <TemperatureSection data={data.temperatures} />
                <div>
                    Updated: {data.dateUpdated.value}
                </div>
                <ActionButton isSubscribed={hasPermission} onClick={hasPermission ? this.unsubscribeUser : this.subscribeUser} />
            </section>
        );
    }

}

export default Panel;
