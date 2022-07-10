import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

//  to do styletron styled components first run this command: npm install styletron-react
// add these imports

// import { Provider } from 'styletron-react';

// import { Client as Styletron } from 'styletron-engine-atomic';

// const engine = new Styletron();


function App() {
  return (
    // then put all components in the provider tag
    // <provider  value={engine}>

    <div className="App">
      {/* props attributes need to be surrounded by {}'s unless its a string */}
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="brown" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="brown" />
    </div>
    
      // </provider>
  );
}

export default App;
