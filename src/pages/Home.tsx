import React, { useEffect, useState } from 'react'
import { listItems } from '../services/list'
import { Box, Flex } from '@chakra-ui/react'
import { useSorting } from '../utils/sort'
import Table from '../components/Table'
import { ListMetadata } from '../@types/generic'

function Home() {
  const [data, setData] = useState<[{ name: string }]>()

  const metadata = {}

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

  const handleMetadata = (newMetadata: Partial<ListMetadata>) => {
    console.log('metadata')
  }

  const columns = useSorting(
    [
      {
        header: 'Nome',
        accessor: 'name'
      }
    ],
    metadata
  )

  const rows =
    data?.map((item) => ({
      cells: [
        {
          field: 'name',
          value: item.name
        }
      ]
    })) || []

  return (
    <Flex align={'center'} justify={'center'}>
      <Box boxShadow={'md'}>
        <Table
          headerColumns={columns}
          rows={rows}
          isLoading={!data}
          metadata={metadata}
          handleSort={handleMetadata}
        />
      </Box>
    </Flex>
  )
}

export default Home
