import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currTime, setCurrTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Current time is {currTime.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App
