import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import aws_config from './aws-exports';

// style
import './App.css';
import InfluencerListView from './views/InfluencerListView';
import AddInfluencerView from './views/AddInfluencerView';

Amplify.configure(aws_config);

//  Query
// const oneInfluencer = API.graphql(graphqlOperation(queries.getInfluencer, { id: '5cd560b0-b965-4ee1-ad07-9fc11d12207d' }))
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));

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
