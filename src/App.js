import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
