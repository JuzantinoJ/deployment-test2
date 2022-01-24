import config from "./config";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tino Portfolio</h1>
      <h2>Welcome to my Page</h2>
      <h3>NFT</h3>
      <p>Welcome to my NFT space. Here I will post about what I will be creating and minting and make my NFT available to everyone. Enjoy!</p>
      Learn React (Deploy Test)
      <div>BaseURL: {config.baseURL}</div>
    </div>
  );
}

export default App;
