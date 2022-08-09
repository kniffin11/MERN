import React, {useState } from "react";
import { useHistory } from "react-router-dom";
// npm install react-router-dom@5

const Form = () => {

    let [category, setCategory] = useState("");
    let [id, setId] = useState("");
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
                    <label htmlFor='category' >Search For: </label>
                    <select  name='category' className="form-select" onChange={(e)=>{setCategory(e.target.value)}} defaultValue={'default'}>
                        {/* disabled and hidden make it so the option cannot be chosen. put "defaultValue={'default'}" in the first select tag. as well as set the value of the hidden option to default*/}
                        <option disabled hidden value="default">Please Select a category</option>
                        <option value="people" >People</option>
                        <option value="planets" >Planets</option>
                        <option value="vehicles" >Vehicles</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                        <option value="films">Films</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor='id' >ID: </label>
                    <input type="number" name="" id="" className="form-control" onChange={(e)=>{setId(e.target.value)}} />
                </div>
                <input style={{marginTop: "23px"}} type="submit" value="search" />
            </form>
        </div>
    );
}

export default Form;