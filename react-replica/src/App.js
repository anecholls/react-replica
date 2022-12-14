import logo from './logo.svg';
import './App.css';
import Navbar from './components/molecules/Navbar';

function App() {
  return (
  <Navbar/>
  );
}

 export default App;

{/*
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Contactos from "./pages/Contactos"

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Link to="/contactos">
        <button>click aqui</button>
      </Link>
    
    
{/* Un comentario dentro JSX, esto si servirá :)
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        

    </div>
    <Routes>
      <Route path="/contactos" element={<Contactos/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

*/}
