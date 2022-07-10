import React, {Component} from 'react';
// to import css: import styles from './PeronCard.module.css';

// inline css
const btnStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
    color: '#fff',
    border: 'none'
};

// must run this cmd first: npm install styled-components 
// dynamic css
const StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${props => props.bgColor};
    // width is either props.weight or 100px if width not provided
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
`;

// class components
class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age
        };
    }
    // this.props.attribute
    render(){
        // let or const
        let {firstName, lastName, hairColor} = this.props;

        // whats rendered
        return <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            {/* how to do inline styles -- css values are above */}
            <button style={btnStyle} onClick={()=> this.setState({age: this.state.age+1})}>Birthday for {firstName}</button>
            {/* or <button onClick={someFunction}>Birthday for {firstName}</button> */}
        </div>
    }

}

export default PersonCard;