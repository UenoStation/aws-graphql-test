import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import styled from 'styled-components';

// components
import Input from '../components/Input';
import Button from '../components/DefaultButton';

// graph
import * as mutations from '../graphql/mutations';

const Container = styled.section`
background-color: black;
color: #efefef;
display: flex;
flex-flow: row nowrap;
padding: 30px;
width: 100%;
`;

class AddInfluencerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            handle: '',
            tags: []
        }
    }

    onInputChange = (name, val) => this.setState({ [name]: val })
    onHandleAddInfluencer = () => {
        API.graphql(graphqlOperation(mutations.createInfluencer, { input: this.state }))
            .then(resp => console.log('-- Add Influencer SUCCESS --', resp))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Input
                    name="name"
                    placeholder="Enter the influencers name"
                    type="text"
                    onInputChange={this.onInputChange}
                    reverse
                />
                <Input
                    name="handle"
                    placeholder="Enter handle (e.g. @joeBlow)"
                    type="text"
                    onInputChange={this.onInputChange}
                    reverse
                />
                <Button onClick={this.onHandleAddInfluencer} reverse>Add</Button>
            </Container>
        )
    }
}

export default AddInfluencerView;