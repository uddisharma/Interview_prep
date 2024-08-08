import { useContext } from 'react';
import './App.css'
import { ThemeContext } from './Components/Context';
import { Link, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import ErrorPage from './Pages/Error';
import Accordian from './Pages/Accordian';

function App() {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div style={{ backgroundColor: theme == "dark" ? "black" : "white", width: "100%", height: "100vh" }}>

      <Link to={"/about"}>About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/acc" element={<Accordian />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App



