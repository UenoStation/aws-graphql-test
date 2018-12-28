import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import aws_config from './aws-exports';

// graph
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

// style
import './App.css';
import InfluencerListView from './views/InfluencerListView';

Amplify.configure(aws_config);

/**
 * Mutation
const influencerDetails = {
  name: 'rags23',
  handle: 'rags23',
  tags: ['art', 'draw', 'sketch']
}

const newInfluencer = API.graphql(graphqlOperation(mutations.createInfluencer, { input: influencerDetails }))
  .then(resp => console.log('response', resp))
  .catch( err => console.log(err));
 */


//  Query
// const allInfluencers = API.graphql(graphqlOperation(queries.listInfluencers))
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));

// const oneInfluencer = API.graphql(graphqlOperation(queries.getInfluencer, { id: '5cd560b0-b965-4ee1-ad07-9fc11d12207d' }))
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfluencerListView />
      </div>
    );
  }
}

export default App;
