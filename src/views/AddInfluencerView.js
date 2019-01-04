import React, { Component } from 'react';

// components
import Button from '../components/DefaultButton';
import Input from '../components/Input';
import Container from '../components/SectionContainer';

class AddInfluencerView extends Component {
    render() {
        const { name, handle, handleChange, handleSubmit } = this.props;
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
                <Button onClick={handleSubmit} reverse>Add</Button>
            </Container>
        )
    }
}

export default AddInfluencerView;