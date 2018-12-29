import React, { Fragment } from 'react';
import styled from 'styled-components';

// components
import Panel from './Panel';

const Container = styled.div`
border: 1px solid #e9e9e9;
background-color: white;
display: flex;
flex-flow: row wrap;
padding: 30px;
width: 100vw;
`;

const InfluencerList = props => {
    return (
        <Container>
            {
                props.items.map(({ name, handle, tags }) => {
                    return (
                        <Panel key={name}>
                            <div>{name}</div>
                            <div>{handle}</div>
                            <div>{tags}</div>
                        </Panel>
                    )
                })
            }
        </Container>
    )
}

export default InfluencerList;