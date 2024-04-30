import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      "title": "title1",
      "desc": "description1"
    },
    {
      "title": "title2",
      "desc": "description2"
    },
    {
      "title": "title3",
      "desc": "description3"
    }
  ])
  const Todo=({ props }) => {
    return (<>
      <div className="m-4 border border-1 border-purple-400">
        <div className="too">{props.title}</div>
        <div className="todo">{props.desc}</div>
        </div></>)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {todos.map(todo=>{
        return <Todo key={todo.title} props={todo}/>
      })}
      <div className="card">
        {showbtn ? <button>True</button> : <button>false</button>}
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
