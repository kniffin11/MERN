import React, {useState} from 'react';

const UserForm = () => {
    // to set default value, do ... = useState("defalutValue");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");  
    let [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // fn or ln less than 2 chars, email less than 5, passwords must match and b3 9 chars
    // only show validations if input is not blank

    // can make functions here, or inline ternary operators
    const firstNameError = () => {
        if(firstName.length < 2){
            return <p>First Name must be alteast 2 letters</p>
        } else {
            return null;
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        // this way the key value names are the same as the variables
        const newUser = {firstName, lastName, email, password, confirmPassword};
        // or 
        // const newUser = {firstName: firstName, lastName: lastName ...};
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    return(
        <div>
            {/* for classes dont forget to use className instead of class */}
            {/* use htmlFor="" instead of for="" in label tags */}
            <form onSubmit={ createUser }>
                <div><br></br>
                    <label>First Name: </label> 
                    <input type="text" onChange={(e)=> setFirstName(e.target.value)} />
                    {/* can type JS here */}
                    {
                        // ternary operator
                        // condition ? ifTrueOutput : elseOutput -- ternary operators need an else; if you want it to do nothing just put else
                        firstName.length < 2 ? <p>First Name must be alteast 2 letters</p> : null
                        // only use a ternary operator if its a quick conditional statement, if lots of lines are needed use a function
                        // firstNameError() -- this is how to call a js function 
                    }
                </div><br></br>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                    {
                        lastName.length < 2 ? <p>Last Name must be alteast 2 letters</p> : null
                    }
                </div><br></br>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                    {
                        // if using dates, can use date.length
                        email.length < 5 ? <p>Email must be alteast 5 letters</p> : null
                    }
                </div><br></br>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                    {
                        password.length < 8 ? <p>Password must be alteast 8 letters</p> : null
                    }
                </div><br></br>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                    {
                        // dont need the 8 letters here since passwords must match
                        confirmPassword == password ? null : <p>Passwords must match</p>
                    }
                </div><br></br>
                <input type="submit" value="Create User" />
            </form>
            <hr/>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default UserForm;