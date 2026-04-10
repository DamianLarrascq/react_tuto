import { useState } from 'react'
import './App.css'
import { Button } from './components'

function App() {
  const [count, setCount] = useState(0)
  const [name, SetName] = useState('Alan')

  const countMore = () => {
    setCount((count) => count + 1)
  }

  const changeName = () => {
    SetName('Gentleman')
  }

  return (
    <>
      <section id="center">
        <Button label={`Count is ${count}`} parentMethod={countMore}></Button>
        <p>{name}</p>
        <Button label='Change Name' parentMethod={changeName}></Button>
      </section>
    </>
  )
}

export default App
