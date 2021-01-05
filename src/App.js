import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom'
import Siderbar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Siderbar />
      <Navbar />
    </Router>
  );
}

export default App;
