import React from 'react';

const People = (props) => {
    // this destructures props to have "attribute.name" instead of "props.attribute.name"
    const {attribute} = props;

    return (
        <div style={{marginLeft: "35%"}} className="d-flex flex-column">
            <h1>Name: {attribute.name}</h1>
            <p>Height: {attribute.height}</p>
            <p>Mass: {attribute.mass}</p>
            <p>Hair Color: {attribute.hair_color}</p>
        </div>
    );
}

export default People;