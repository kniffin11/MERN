import React, {useState} from 'react';

const ToDoList = () => {
    // state variables
    let [desc, setDesc] = useState("");
    let [complete, setcomplete] = useState(false);
    let [allTasks, setAllTasks] = useState([]);

    // functions 
    const createTask = (e) => {
        // stop the form from submitting
        e.preventDefault();
        // create an instance of the item object from form
        let task = {desc};
        // add to tasks array
        setAllTasks([...allTasks, task]);
        // clear state variable
        setDesc("");
    }

    const toggleComplete = (e, idx) => {
        // modify allTasks array at specific index that has complete checked
        // make a copy of list
        let [...copyList] = allTasks;
        // change task at that location
        copyList[idx].complete = e.target.checked;
        // to hardcode it in: copyList[idx].complete = true;
        // to toggle between true and false: copyList[idx].complete = !copyList[idx].complete;
        // update state variable with modified copy
        setAllTasks(copyList);
    }

    const deleteTask = (e, idx) => {
        // delete task in allTasks array at specific index 
        // make a copy of list set to the filtered list
        // this callback function (using a function as an attirbute for another function) references the task we want to delete and its idx position
        let filterCopy = allTasks.filter((task, i) => {
            // this returns only the tasks that doesnt include the task at idx. "give every task except the one at idx"
            return i !== idx;
        });
        // update state variable allTasks
        setAllTasks(filterCopy);
    }

    return(
        <>
            {/* form start */}
            <form onSubmit={createTask}>
                <label htmlFor="desc">Enter Task: </label>
                <input onChange={(e) => {setDesc(e.target.value)}} className='m-2' type="text" name="desc"/>
                <button type="submit">Add</button>
            </form>
            {/* form end */}
            <hr/>
            {/* list starts */}
            <div>
                {
                    allTasks.map((taskObj, idx)=>{
                        // key should usually be an ID number, but for this assignemnt it gets rid of the error
                        // can be in any tag, ie <div key={idx}></div>
                        // in the toggleComplete(idx), idx is used as an id
                        // the ()=> means "do this only on change" otherwise, itll run the function before event is triggered
                        // used a ternary operator in the style tag
                        return (
                            // theres a <p><input/><button/></p>
                            <>
                                <p style={{textDecoration: taskObj.complete ? "line-through" : "none" }} key={idx}>{taskObj.desc} <input onChange={(e)=>toggleComplete(e, idx)} type="checkbox" name="desc"/></p>
                                {/* the key isnt practical, just to remove error on this assignment */}
                                <button key={idx+25} onClick={(e)=>{deleteTask(e,idx)}}>Delete</button>
                            </>
                        );
                        // checkboxes can use onClick or onChange
                    })
                }
            </div>
            {/* list ends */}
        </>
    );
};

export default ToDoList;