import React, {useState} from 'react';
import '../App.css';

const Box = () => {
    // state variables
    let [color, setColor] = useState("");
    let [size, setSize] = useState("");

    // store all of the boxes
    //                                    ([]) means set array state
    let [allBoxes, setAllBoxes] = useState([]);

    // you cant use a regular array with state variables
    // let list = [];

    const createBox = (e) =>{
        // the default behavior of a form is to reload the page, we can prevent that with 
        // e represent the event of form submission
        e.preventDefault(); // make this first line of code

        let box = {color, size};

        // ... is a spread operator. It gives a copy of whatever is already inside of the list, and then adds the new object to the previous list of objects.
        //          [...stateArrName] -- this just gives the entire array
        //          [...stateArrName, newArrVar]
        setAllBoxes([...allBoxes, box]);
    }

    return(
        // nest tag is <></> -- acts as a div but less fussy
        <>
            {/* to add a box */}
            <form onSubmit={createBox}><br></br>
                <label htmlFor='color'>Color </label>
            {/*                  (event arrow function) => {function(value on input)} */}
                <input onChange={(e)=>{setColor(e.target.value)}} className='m-2' type="text" name="color"/>
                <button type="submit">Add</button>
            </form>
            <hr/>
            {/* all the boxes flexed */}
            <div className='box d-flex flex-wrap align-items-end'>
            { 
                // .map acts as a for loop - same as a for loop
                // one function inside of another is called a callback function
                allBoxes.map((boxObj)=>{
                return <div className='boxSize' style={{backgroundColor: boxObj.color, width: boxObj.size, height: boxObj.size}}></div>
                })
            }
            {/* use .map when you want ot apply a function fo each item in a list(arrays only).  */}
            </div>
        </>
    );
};

export default Box;