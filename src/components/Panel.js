import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
border: 1px solid #e9e9e9;
background-color: white;
display: flex;
flex-flow: column nowrap;
justify-content: space-between;
padding: 30px;
width: 200px;
height: ${props => (props.tall) ? "500px" : "100px"}
`;

const Panel = props => {
    return <Container {...props}>{props.children}</Container>
}

export default Panel;