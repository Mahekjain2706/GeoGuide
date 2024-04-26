import logo from './logo.svg';
import './App.css';
import './App.css';
import NavBar from './Dashboard/Navbar/navBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Dashboard/Home/Home.jsx';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import Stats from './Dashboard/Statestics/graph.jsx';
import Physical from './Dashboard/Contriute/Physical/physical.jsx';
import Financial from './Dashboard/Contriute/financial/financial.jsx';
import Support from './Dashboard/Support/support.jsx';
import Footer from './Dashboard/Footer/Footer.jsx';
import SearchBar from './Dashboard/Statestics/SearchBar.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<><NavBar/><Home/><Footer/></>} />
            <Route path='/stats' element={<><NavBar/><Stats /><Footer/></>} />
            <Route path='/physical' element={<><NavBar/><Physical /><Footer/></>} />
            <Route path='/financial' element={<><NavBar/><Financial /><Footer/></>} />
            <Route path='/support' element={<><NavBar/><Support/><Footer/></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
