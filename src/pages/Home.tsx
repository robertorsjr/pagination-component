import React, { useEffect, useState } from 'react'
import { listItems } from '../services/list'
import { Flex, Text } from '@chakra-ui/react'

function Home() {
  const [data, setData] = useState<[{ name: string }]>()

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await listItems()
        setData(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <Flex flexDir={'column'}>
      {data?.map((item) => (
        <Text key={item.name}>{item.name}</Text>
      ))}
    </Flex>
  )
}

export default Home
