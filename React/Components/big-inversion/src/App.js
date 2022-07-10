import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    // render the components the same way as class components
    <div className="App">
      {/* props attributes need to be surrounded by {}'s unless its a string */}
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="brown" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="brown" />
    </div>
  );
}

export default App;
