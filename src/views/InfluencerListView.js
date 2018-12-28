import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

// components
import InfluencerList from '../components/InfluencerList';

// graphql
import * as subscriptions from '../graphql/subscriptions';

class InfluencerListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            influencers: [{ name: 'Item name 1', handle: 'someHandle', tags: ['art', 'draw', 'sketch'] }]
        }
    }
    componentDidMount() {
        API.graphql(graphqlOperation(subscriptions.onCreateInfluencer))
            .subscribe({
                next: (influencerData) => console.log(influencerData)
            });

        API.graphql(graphqlOperation(subscriptions.onUpdateInfluencer))
            .subscribe({
                next: (influencerData) => console.log(influencerData)
            });
    }
    componentWillUnmount() {
        console.log('-- componentWillUnmount called');
    }
    render() {
        return (
            <InfluencerList items={this.state.influencers} />
        )
    }
}

export default InfluencerListView;