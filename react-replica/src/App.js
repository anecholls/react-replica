import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/molecules/Navbar';
import Home from './pages/Home';
import Join from './pages/Join';
import Discover from './pages/Discover';
import Error from './pages/Error';

function App() {
  return (
    <div className = "App">
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="discover" element ={<Discover/>}/>
    <Route path="join" element ={<Join/>}/>
    <Route path="#" element ={<Error/>}/>
  </Routes>

</Router>
</div>
  



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
