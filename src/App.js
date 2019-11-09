import React, { Component } from 'react';
import Panel from './Components/Panel/Panel';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { getData } from './utils/dataHelper';
import { hasPermission, revokePermission, requestNotificationPermission } from './utils/permissionHelper';
import landscape from './res/landscape.jpg';

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
      <div className="app" style={{ backgroundImage: `url(${landscape})` }}>
        <Header />
        <Panel data={data} hasPermission={hasPermission} />
        <Footer
          hasPermission={hasPermission}
          data={data}
          unsubscribeUser={this.unsubscribeUser}
          subscribeUser={this.subscribeUser} />
      </div>
    );
  }
}

export default App;
