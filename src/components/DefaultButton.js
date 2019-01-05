import React from 'react';
import styled from 'styled-components';
import '../style/vars.css';

const Button = styled.button`
background-color: ${props => props.reverse ? "transparent" : "white"};
border: 1px solid #e5e5e5;
box-sizing: border-box;
color: ${props => props.reverse ? 'var(--button-color-reverse)' : 'var(--button-color)'};
font-weight: bold;
padding: 0 30px;
margin: 0;
vertical-align: middle;
font-size: 14px;
line-height: 38px;
text-align: center;
text-decoration: none;
text-transform: uppercase;
:focus {
    border: 1px solid;
    border-color: #b2b2b2;
    outline: none;
    background-color: transparent;
    color: #222;
}
:hover {
    background-color: transparent;
    border: 1px solid;
    border-color: #b2b2b2;
    color: ${props => props.reverse ? 'var(--button-color-hover-reverse)' : 'var(--button-color-hover)'};
    cursor: pointer;
}
`;

const DefaultButton = props => {
    return (
        <Button onClick={(e) => props.onClick(e)} {...props}>{props.children}</Button>
    )
}

export default DefaultButton;