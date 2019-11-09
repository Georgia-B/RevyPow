import React, { Component } from 'react';
import Panel from './Components/Panel/Panel';
import SubscribeSwitch from './Components/SubscribeSwitch/SubscribeSwitch';
import { getData } from './utils/dataHelper';
import { hasPermission, revokePermission, requestNotificationPermission } from './utils/permissionHelper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      hasPermission: false
    }
  }

  async componentDidMount() {
    getData().then(data => {
      this.setState({ data });
    });
    hasPermission().then(hasPermission => {
      this.setState({ hasPermission });
    });
  }

  subscribeUser = () => {
    this.setState({
      hasPermission: true
    })
    requestNotificationPermission().then(permission => {
      this.setState({
        hasPermission: permission === "granted" ? true : false
      });
    });
  }

  unsubscribeUser = async () => {
    this.setState({
      hasPermission: false
    })
    revokePermission().then(res => {
      console.log("Unsubscribed");
    });
  }

  render() {
    const { hasPermission, data } = this.state;
    return (
      <div className="app">
        <SubscribeSwitch isSubscribed={hasPermission} onClick={hasPermission ? this.unsubscribeUser : this.subscribeUser} />
        <Panel data={data} hasPermission={hasPermission} />
        {hasPermission && <div className="subscription-notice">
          You are subscribed to the morning snow report.
        </div>}
      </div>
    );
  }
}

export default App;
