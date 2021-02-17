import logo from './logo.svg';
import './App.css';
import PersonList from './Components/PersonList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Axios data!
        </p>
        <PersonList />
      </header>
      
    </div>
  );
}

export default App;
