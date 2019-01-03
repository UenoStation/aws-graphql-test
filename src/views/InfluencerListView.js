import React, { Component } from 'react';

// components
import InfluencerList from '../components/InfluencerList';

class InfluencerListView extends Component {
    render() {
        return (
            (this.props.data)
                ? <InfluencerList {...this.props} />
                : <h3>No influencers found</h3>
        )
    }
}

export default InfluencerListView;