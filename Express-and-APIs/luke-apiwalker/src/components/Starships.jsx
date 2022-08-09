import React from 'react';

const Starships = (props) => {
    const { attribute } = props;
    return (
        <div style={{ marginLeft: "35%" }} className="d-flexbox flex-column">
            <h1>Name: {attribute.name}</h1>
            <p>Model: {attribute.model}</p>
            <p>Class: {attribute.starship_class}</p>
            <p>Cost: {attribute.cost_in_credits}</p>
        </div>
    );
}

export default Starships;