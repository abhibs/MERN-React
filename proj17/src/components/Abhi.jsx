import React from 'react';

const Abhi = (props) => {
    return (
        <div>
            <h1>Name: {props.person['name']}</h1>
            <h1>Age: {props.person['age']}</h1>
            <h1>Location: {props.person['location']}</h1>

        </div>
    );
};

export default Abhi;