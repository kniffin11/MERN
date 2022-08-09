import React, {useState, useEffect} from "react";
import {useParams, Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const OneProduct = () => {

    const {id} = useParams();

    // state var for the one product we get back
    const [productInfo, setProductInfo] = useState({});

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            console.log("response -->", response);
            setProductInfo(response.data.results);
        })
        .catch(err => {
            console.log("errrr", err);

        })
        console.log("doing other stuff");
    }, [])

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then(response => {
            console.log("reponse -> ", response)
            history.push("/");
        })
        .catch(err => console.log("something went wrong", err))
    }

    return (
        <>
            <h1>Name: {productInfo.title}</h1>
            <p>Price: {productInfo.price}</p>
            <p>Description: {productInfo.description}</p>
            <p><Link to={`/edit/${id}`} >Edit {productInfo.title}</Link></p>
            <button onClick={deleteProduct} >Delete</button>
        </>
    );
}

export default OneProduct;