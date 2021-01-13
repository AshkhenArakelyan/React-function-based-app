import React from 'react';

const Input = (props) => {
    return (
        <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(event) => props.onChange(event)}
        />
    );
}

export default Input;