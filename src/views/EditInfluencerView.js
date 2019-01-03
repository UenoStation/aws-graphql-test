import React, { Component } from 'react';

// components
import Button from '../components/DefaultButton';
import Container from '../components/SectionContainer';
import Input from '../components/Input';

class EditInfluencerView extends Component {
    onInputChange = (name, val) => this.setState({ [name]: val })
    render() {
        const { handleChange, handleUpdate, influencer: { id, name, handle } } = this.props;
        return (
            <Container>
                <Input
                    name="name"
                    placeholder="Enter the influencers name"
                    type="text"
                    onInputChange={handleChange}
                    value={name}
                    reverse
                />
                <Input
                    name="handle"
                    placeholder="Enter handle (e.g. @joeBlow)"
                    type="text"
                    onInputChange={handleChange}
                    value={handle}
                    reverse
                />
                <Button onClick={handleUpdate} reverse>Save</Button>
            </Container>
        );
    }
}

export default EditInfluencerView;