import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import About from './pages/About';
import Home from "./pages/Home";
import Event from "./pages/Event"
import Museum from "./pages/Museum"
import Article from "./pages/Article"
import Wayang from "./pages/Wayang"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/event' element={<Event />} />
        <Route path='/museum' element={<Museum />} />
        <Route path='/article' element={<Article />} />
        <Route path='/wayang' element={<Wayang />} />
      </Routes>
    </Router>
  )
};

export default App;
