import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
// import { Connect } from 'aws-amplify-react';

// components
import InfluencerList from '../components/InfluencerList';

// graphql
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';

class InfluencerListView extends Component {
    state = { influencers: [] }
    createInfluencerSubscription;
    updateInfluencerSubscription

    componentDidMount = async () => {
        this.createInfluencerSubscription = await API.graphql(graphqlOperation(subscriptions.onCreateInfluencer))
            .subscribe({
                next: (eventData) => {
                    let influencers = [
                        ...this.state.influencers,
                        eventData.value.data.onCreateInfluencer
                    ];
                    this.setState({influencers: influencers});
                },
                error: (err) => console.log(err)
            });

        this.updateInfluencerSubscription = await API.graphql(graphqlOperation(subscriptions.onUpdateInfluencer))
            .subscribe({
                next: (influencerData) => console.log(influencerData),
                error: (err) => console.log(err)
            });

        API.graphql(graphqlOperation(queries.listInfluencers))
            .then(resp => this.setState({ influencers: resp.data.listInfluencers.items }))
            .catch(err => console.log(err));
    }
    componentWillUnmount() {
        // unmount component here
    }
    render() {
        return (
            <InfluencerList items={this.state.influencers} />
        )
    }
}

export default InfluencerListView;