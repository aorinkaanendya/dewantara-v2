import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import About from './pages/About';
import Home from "./pages/Home";
import Event from "./pages/Event"
import Museum from "./pages/Museum"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/event' element={<Event />} />
        <Route path='/museum' element={<Museum />} />
      </Routes>
    </Router>
  )
};

export default App;
