import './App.css'
import { useRecoilState } from 'recoil'
import countAtom from './store/atom'

function App() {

  const [count, setCount] = useRecoilState(countAtom)

  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          count dec
        </button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count inc
        </button>
      </div>

    </>
  )
}

export default App
