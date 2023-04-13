import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
// Create an application with Home, Odd and Even components
// Display in the Home component a button that returns the sentence contained in the http://numbersapi.com/random/math endpoint when clicked, and also add two buttons: even and odd.
// Based on the first number of the sentence resulting from the API, automatically add it to the Even or Odd component; clicking on the respective buttons will display the list of phrases.