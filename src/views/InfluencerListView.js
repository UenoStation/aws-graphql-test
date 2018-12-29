import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';

// components
import InfluencerList from '../components/InfluencerList';

// graphql
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';

class InfluencerListView extends Component {
    constructor(props) {
        super(props);
        this.state = { influencers: [] }
    }
    componentDidMount = async () => {
        const createInfluencerSubscription = await API.graphql(graphqlOperation(subscriptions.onCreateInfluencer))
            .subscribe({
                next: (influencerData) => console.log(influencerData),
                error: (err) => console.log(err)
            });

        const updateInfluencerSubscription = await API.graphql(graphqlOperation(subscriptions.onUpdateInfluencer))
            .subscribe({
                next: (influencerData) => console.log(influencerData),
                error: (err) => console.log(err)
            });

        // API.graphql(graphqlOperation(queries.listInfluencers))
        //     .then(resp => this.setState({ influencers: resp.data.listInfluencers.items }))
        //     .catch(err => console.log(err));
    }
    componentWillUnmount() {
        // unmount component here
    }
    render() {
        return (
            <Connect query={graphqlOperation(queries.listInfluencers)}>
                {({ data: { listInfluencers }, loading, error }) => {
                    if (error) return (<h3>Error</h3>);
                    if (loading || !listInfluencers) return (<h3>Loading...</h3>);
                    return <InfluencerList items={listInfluencers.items} />
                }}
            </Connect>
        )
    }
}

export default InfluencerListView;