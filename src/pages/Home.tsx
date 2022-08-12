import React, { useEffect, useState } from 'react'
import { listItems } from '../services/list'

function Home() {
  const [data, setData] = useState<any[]>()

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await listItems()
        setData(data?.results)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div>
      {data?.map((item) => (
        <text key={item.name}>{item.name}</text>
      ))}
    </div>
  )
}

export default Home
