import { useState } from 'react'
import './App.css'
import { Button } from './components'

function App() {
  const [count, setCount] = useState(0)

  const countMore = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <section id="center">
        <Button label={`Count is ${count}`} parentMethod={countMore}></Button>
      </section>
    </>
  )
}

export default App
