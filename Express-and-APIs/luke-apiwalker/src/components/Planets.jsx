import React from 'react';

const Planets = (props) => {
    const {attribute} = props;
    return (
        <div style={{marginLeft: "35%"}} className="d-flexbox flex-column">
            <h1>Name: {attribute.name}</h1>
            <p>Diameter: {attribute.diameter}</p>
            <p>Orbital Period: {attribute.orbital_period}</p>
            <p>Gravity: {attribute.gravity}</p>
        </div>
    );
}

export default Planets;