import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MainPage from './MainPage';
import OtherPage from './OtherPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://hub.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{paddingBottom: "25px"}}
          >
            Learn Docker
          </a>
          <Link to="/">Home</Link>
          <Link to="/other">Other</Link>
          <div style={{paddingTop: "2%"}}>
            <Route exact path="/" component={MainPage} />
            <Route path="/other" component={OtherPage} />
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
