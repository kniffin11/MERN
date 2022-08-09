import React, {useState, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {

    const {id} = useParams();

    // state var for the one product we get back
    const [productInfo, setProductInfo] = useState({});

    const history = useHistory(); // so we can redirect 

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

    // On change, update the part of the product that has been changed, copy the rest
    const changeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/update/${id}`, productInfo)
        .then(response => {
            console.log("response: ", response);
            history.push("/"); // redirect
        })
        .catch(err => console.log("errrrr", err))
    }

    return (
        <div className="container">
            <h1>Edit Product</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" className="form-control" onChange={changeHandler} value={productInfo.title} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="number" step={0.01} name="price" className="form-control" onChange={changeHandler} value={productInfo.price} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" className="form-control" onChange={changeHandler} value={productInfo.description} ></input>
                </div>
                <input style={{marginLeft: "48%", marginTop: "10px"}} type="submit" value="Update" ></input>
            </form>
        </div>
    );
}

export default EditProduct;