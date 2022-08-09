import React from 'react';

const Species = (props) => {
    const { attribute } = props;
    return (
        <div style={{ marginLeft: "35%" }} className="d-flexbox flex-column">
            <h1>Name: {attribute.name}</h1>
            <p>Classification: {attribute.classification}</p>
            <p>Designation: {attribute.designation}</p>
            <p>Eye Colors: {attribute.eye_colors}</p>
        </div>
    );
}

export default Species;