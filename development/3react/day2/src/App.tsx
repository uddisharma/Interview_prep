import { useContext } from 'react';
import './App.css'
import { ThemeContext } from './Components/Context';
import Hooks from './Components/Hooks'
import ContextButton from './Components/Provider'
import LayoutEffect from './Components/Layout';

function App() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <div style={{ backgroundColor: theme == "dark" ? "black" : "white", width: "100%", height: "100vh" }}>
      <Hooks />
      <p>use Context</p>
      <ContextButton />
      <LayoutEffect />
    </div>
  )
}

export default App
