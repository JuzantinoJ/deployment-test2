import config from "./config";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tino Portfolio</h1>
      <h2>Welcome to my Page</h2>
      Learn React (Deploy Test)
      <div>BaseURL: {config.baseURL}</div>
    </div>
  );
}

export default App;
