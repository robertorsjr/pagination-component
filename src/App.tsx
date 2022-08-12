import React, { useEffect, useState } from 'react'
import { listItems } from './services/list'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    async function getData() {
      try {
        const response = await listItems()
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return <div className='App'>Hello world</div>
}

export default App
