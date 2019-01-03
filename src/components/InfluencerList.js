import React from 'react';
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
                props.data.map(({ id, name, handle }) => {
                    return (
                        <Panel key={name} onClick={(e) => props.handleSelected(id)}>
                            <h3>{name}</h3>
                            <h5>{handle}</h5>
                        </Panel>
                    )
                })
            }
        </Container>
    )
}

export default InfluencerList;