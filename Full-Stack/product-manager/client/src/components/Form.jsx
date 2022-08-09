import React, {useState } from "react";
import { useHistory } from "react-router-dom";
// npm install react-router-dom@5

const Form = () => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    const history = useHistory(); // used to redirect

    // if a form is going to use a function, it needs an event listener
    const search = (e) => {
        // always first line on a form submit
        e.preventDefault();

        // history.push(routeGoesHere);
        // to use input variables, and make a template literal for a route, use back ticks and money hug the variables
        history.push(`/${category}/${id}`);
    }

    return (
        <div><br/>
            <form className="d-flex justify-content-center align-items-center" onSubmit={search}>
            <div className="form-group">
                    <label htmlFor='title' >Title: </label>
                    <input type="text" name="title" className="form-control" onChange={(e)=>{setTitle(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor='price' >Search For: </label>
                    <input type="number" name="price" className="form-control" onChange={(e)=>{setPrice(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor='description' >ID: </label>
                    <input type="text" name="description" className="form-control" onChange={(e)=>{setDescription(e.target.value)}} />
                </div>
                <input style={{marginTop: "23px"}} type="submit" value="Create" />
            </form>
        </div>
    );
}

export default Form;
