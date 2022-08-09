import React, {useState} from "react";
import axios from 'axios';

const NewProductForm = (props) => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    // initializing errors with an object
    let [errors, setErrors] = useState({});

    const addProduct = (e) => {
        e.preventDefault();

        let formInfo = {title, price, description};

        axios.post("http://localhost:8000/api/products/new", formInfo)
            .then(response => {
                console.log("Response -->", response);

                // if there are validation errors
                if(response.data.error){
                    setErrors(response.data.error.errors);
                } else {
                    // clear out the variables to clear out the form
                    setTitle("");
                    setPrice("");
                    setDescription("");

                    props.setNewProduct(!props.newProduct);
                }

            })
            .catch(err => console.log("errrr", err))
    }

    return (
        <div className="container">
            <form onSubmit={addProduct}>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" className="form-control" onChange={(e)=>setTitle(e.target.value)} value={title} ></input>
                    {/* <p className="text-danger">{errors.title? errors.title.message: null}</p> -- these are the same, below is just shorter */}
                    <p className="text-danger">{errors.title?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" className="form-control" onChange={(e)=>setPrice(e.target.value)} value={price} ></input>
                    {/* <p className="text-danger">{errors.price? errors.price.message: null}</p> -- these are the same, below is just shorter */}
                    <p className="text-danger">{errors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" className="form-control" onChange={(e)=>setDescription(e.target.value)} value={description} ></input>
                    {/* <p className="text-danger">{errors.description? errors.description.message: null}</p> -- these are the same, below is just shorter */}
                    <p className="text-danger">{errors.description?.message}</p>
                </div>
                <input style={{marginLeft: "48%", marginTop: "10px"}} type="submit" value="Create" ></input>
            </form>
        </div>
    );
}

export default NewProductForm;