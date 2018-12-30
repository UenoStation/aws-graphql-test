import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import aws_config from './aws-exports';

// style
import './App.css';
import InfluencerListView from './views/InfluencerListView';
import AddInfluencerView from './views/AddInfluencerView';

Amplify.configure(aws_config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddInfluencerView />
        <InfluencerListView />
      </div>
    );
  }
}

export default App;
