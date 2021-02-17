import logo from './logo.svg';
import './App.css';

import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Axios data!
        </p>
      </header>
      <PersonInput />
      <PersonList />
      
    </div>
  );
}

export default App;
