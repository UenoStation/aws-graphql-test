import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
background-color: black;
color: #efefef;
display: flex;
flex-flow: row nowrap;
padding: 30px;
width: 100%;
`;

export default props => <Container>{props.children}</Container>