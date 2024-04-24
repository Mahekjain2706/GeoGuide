import logo from './logo.svg';
import './App.css';
import './App.css';
import NavBar from './Dashboard/Navbar/navBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Dashboard/Home/Home.jsx';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import Graph from './Dashboard/Graphs/graph.jsx';
import Physical from './Dashboard/Contriute/Physical/physical.jsx';
import Financial from './Dashboard/Contriute/financial/financial.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<><NavBar/><Home /></>} />
            <Route path='/graph' element={<><NavBar/><Graph /></>} />
            <Route path='/physical' element={<><NavBar/><Physical /></>} />
            <Route path='/financial' element={<><NavBar/><Financial /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
