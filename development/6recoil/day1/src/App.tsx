
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil'
import countAtom, { countSelector, getTodo, notificationAtom, totalNotificationCount } from './store/atom'

function App() {

  const [count, setCount] = useRecoilState(countAtom)

  const networkCount = useRecoilValue(notificationAtom)

  return (
    <>

      <div className="">
        <button onClick={() => setCount((count) => count - 1)}>
          dec
        </button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          inc
        </button>
        <br />
        {useRecoilValue(countSelector) ? "even" : null}
      </div>


      <br />
      <hr />
      <br />


      <div>
        <button>Home</button>
        <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.network})</button>
        <button>Jobs {networkCount.jobs}</button>
        <button>Messaging ({networkCount.messaging})</button>
        <button>Notifications ({networkCount.notifications})</button>
        <button>Me ({useRecoilValue(totalNotificationCount)})</button>
      </div>


      <br />
      <hr />
      <br />


      <div>
        <p>List of todos</p>
        <Todo id={1} />
        <Todo id={2} />
      </div>

    </>
  )
}

function Todo({ id }: { id: number }) {

  // const todo = useRecoilValue(getTodo(id))
  const todos = useRecoilValueLoadable(getTodo(id))


  if (todos.state === "loading") {
    return <p>Loading...</p>
  }
  if (todos.state === "hasError") {
    return <p>{todos?.contents.message}</p>
  }
  return (
    <div>
      <p>{todos?.contents?.todo?.title}</p>
      <p>{todos?.contents?.todo?.description}</p>
    </div>
  )


}

export default App
