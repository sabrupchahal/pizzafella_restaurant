import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (

    <Router>
      <div>
        <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/menu" Component = {Menu}/>
        <Route path="/about" Component = {About} />
        <Route path="/contact" Component = {Contact}/>
        </Routes>
      </div>    
    </Router>
  );
}

export default App;
