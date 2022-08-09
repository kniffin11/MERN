import React from 'react';

const Films = (props) => {
    const { attribute } = props;
    return (
        <div style={{ marginLeft: "35%" }} className="d-flexbox flex-column">
            <h1>Title: {attribute.title}</h1>
            <p>Director: {attribute.director}</p>
            <p>Producer: {attribute.producer}</p>
            <p>Release Date: {attribute.release_date}</p>
        </div>
    );
}

export default Films;