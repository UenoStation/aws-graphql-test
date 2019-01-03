import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
width: 200px;
height: 40px;
background-color: ${props => props.reverse ? "transparent" : "white"};
color: ${props => props.reverse ? "white" : "#666"};
box-sizing: border-box;
margin: 0;
border-radius: 0;
padding: 0 10px;
border: 1px solid #e5e5e5;
:focus {
    border-color: #1e87f0;
}
`;

const Input = props => {
    return (
        <TextInput
            name={props.name}
            placeholder={props.placeholder}
            type={props.type || 'text'}
            onChange={(e) => props.onInputChange(props.name, e.currentTarget.value)}
            value={props.value || ''}
        />
    )
}

export default Input;