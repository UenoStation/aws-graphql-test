import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import aws_config from './aws-exports';
import { API, graphqlOperation } from 'aws-amplify';

// graph
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import * as subscriptions from './graphql/subscriptions';

// style
import './App.css';
import InfluencerListView from './views/InfluencerListView';
import AddInfluencerView from './views/AddInfluencerView';
import EditInfluencerView from './views/EditInfluencerView';

Amplify.configure(aws_config);

// TODO: [AddInfluencerView] : Need to move input change up to app level
// TODO: [App] : Move subscription handler logic to separate file
// TODO: Update subscription handler needs to be simplified and remove '__typename' attribute 

class App extends Component {
  state = {
    influencers: [],
    selected: null,
    isEditView: false
  }
  createInfluencerSubscription;
  updateInfluencerSubscription;

  componentDidMount = async () => {
    this.createInfluencerSubscription = await API.graphql(graphqlOperation(subscriptions.onCreateInfluencer))
      .subscribe({
        next: (eventData) => {
          let influencers = [
            ...this.state.influencers,
            eventData.value.data.onCreateInfluencer
          ];
          this.setState({ influencers: influencers });
        },
        error: (err) => console.log(err)
      });

    this.updateInfluencerSubscription = await API.graphql(graphqlOperation(subscriptions.onUpdateInfluencer))
      .subscribe({
        next: (eventData) => {
          const newInfluencer = eventData.value.data.onUpdateInfluencer;
          let index = this.state.influencers.findIndex(i => i['id'] === newInfluencer.id);
          let clone = this.state.influencers.slice();
          clone[index] = newInfluencer;
          this.setState(
            Object.assign(this.state,
              {
                influencers: [
                  ...clone
                ]
              }))
        },
        error: (err) => console.log(err)
      });

    API.graphql(graphqlOperation(queries.listInfluencers))
      .then(resp => this.setState({ influencers: resp.data.listInfluencers.items }))
      .catch(err => console.log(err));
  }
  componentWillUnmount() {
    // unmount component here
  }

  onHandleChange = (name, val) => {
    const selected = Object.assign(this.state.selected, { [name]: val });
    this.setState(Object.assign(this.state, { selected }));
  }
  onHandleSelected = iid => {
    const influencer = this.state.influencers.find((i) => i['id'] === iid);
    const { id, name, handle } = influencer;
    this.setState({
      selected: {
        id,
        name,
        handle
      }
    });
  }
  onHandleUpdateInfluencer = () => {
    API.graphql(graphqlOperation(mutations.updateInfluencer, { input: this.state.selected }))
      .then(resp => console.log('-- Update Influencer SUCCESS --', resp))
      .catch(err => console.log(err));
  }
  toggleEdit = () => this.setState({ isEditView: !this.state.isEditView })

  render() {

    return (
      <div className="App">
        <AddInfluencerView />
        {this.state.selected &&
          <EditInfluencerView
            influencer={this.state.selected}
            handleChange={this.onHandleChange}
            handleUpdate={this.onHandleUpdateInfluencer}
          />
        }
        <InfluencerListView
          data={this.state.influencers}
          handleSelected={(id) => this.onHandleSelected(id)}
        />
      </div>
    );
  }
}

export default App;
