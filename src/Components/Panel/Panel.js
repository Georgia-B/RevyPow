import React, { Component } from 'react';
import SubscribeSwitch from '../SubscribeSwitch/SubscribeSwitch';
import Temperature from '../TemperatureSection/Temperature';
import SnowSection from '../SnowSection/SnowSection';
import Loading from '../Loading/Loading';
import getData from '../../utils/dataHelper';
import {
    requestNotificationPermission,
    revokePermission,
    hasPermission
} from '../../utils/permissionHelper';
import ContentSection from '../ContentSection/ContentSection';

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
        this.setState({
            data
        });
        const permission = await hasPermission();
        this.setState({
            hasPermission: permission
        })
    }

    componentDidUpdate(newProps) {
        if (this.props.data !== newProps.data) {
            this.setState({
                data: newProps.data
            })
        }
        if (this.props.hasPermission !== newProps.hasPermission) {
            this.setState({
                hasPermission: newProps.hasPermission
            })
        }
    }

    subscribeUser = () => {
        this.setState({
            hasPermission: true
        })
        requestNotificationPermission().then(permission => {
            if (permission === "granted") {
                this.setState({
                    hasPermission: true
                })
            } else {
                this.setState({
                    hasPermission: false
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
            return <Loading />
        }
        return (
            <React.Fragment>
                <SubscribeSwitch isSubscribed={hasPermission} onClick={hasPermission ? this.unsubscribeUser : this.subscribeUser} />
                <section className="panel">
                    <div>
                        <h1 className="panel__title">RevyPow</h1>
                    </div>
                    <ContentSection className="snow-container">
                        <SnowSection data={data.newSnow} />
                        <SnowSection data={data.base} />
                    </ContentSection>
                    <ContentSection>
                        {data.temperatures.map(temp => {
                            return <Temperature
                                key={temp.title}
                                title={temp.title}
                                subtitle={temp.subtitle}
                                value={temp.value} />
                        })}
                    </ContentSection>
                    <div>
                        <div>Last updated</div><div>{data.dateUpdated.value}</div>
                    </div>
                </section>
                {hasPermission && <div className="subscription-notice">
                    You are subscribed to the morning snow report.
                </div>}
            </React.Fragment>
        );
    }

}

export default Panel;
