import React, { useState, useEffect } from "react";
import axios from 'axios';
// link renders a component while a tags restart the page
import {Link} from 'react-router-dom';

const AllProducts = (props) => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        // promise is when we dont know if itll go through
        axios.get('http://localhost:8000/api/products')
        .then(response => {
            console.log("response -->", response);
            setAllProducts(response.data.results);
            console.log(allProducts);
        })
        .catch(err => {
            console.log("errrr", err);
        })
        console.log("doing other stuff");
    }, [props.newProduct])
    
    return (
        <div className="container">
            {
                allProducts.map((productObj, idx) => {
                    return (
                        <div key={productObj._id} className="card mx-auto">
                            <h2><Link to={`/${productObj._id}`}>{productObj.title}</Link></h2>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllProducts;