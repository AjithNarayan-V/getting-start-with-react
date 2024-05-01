import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [card, setCard] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData=async()=>{
    let a=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await a.json()
    setCard(data)
    console.log(data)
  }


  
  return (
    <>
       <div className="container">
        {card.map((card)=>{
          return <div className="card" key={card.id}>
          <h1>{card.title}</h1>
          <p>{card.body}</p>
          <span>By: UserId: {card.userId} </span>
          </div>
          
        })}
       </div>
    </>
  )
}

export default App
