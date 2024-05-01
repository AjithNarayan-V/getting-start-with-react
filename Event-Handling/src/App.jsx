import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [form, setform] = useState({})

  const handleClick = () => {
    alert("Button Clicked")
  }
  const handlechange = (e) => {
    // setEmail(e.target.value)
    setform({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>

        <input type="email" name='email' value={form.email ? form.email : ""} onChange={handlechange} />
        <input type="phone" name='phone' value={form.phone ? form.phone : ""} onChange={handlechange} />
      </div>

    </>
  )
}

export default App
