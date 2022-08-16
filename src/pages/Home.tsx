import React, { useEffect, useState } from 'react'
import { listItems } from '../services/list'
import { Box, Flex } from '@chakra-ui/react'
import Table from '../components/Table'
import { ListMetadata, PaginationPayload } from '../@types/generic'
import useSafePromise from '../hooks/useSafePromise'

interface dataProps {
  count: number
  results: [{ name: string; url: string }]
}

function Home() {
  const [data, setData] = useState<dataProps>()
  const { safe, isLoading, isEmpty } = useSafePromise()
  const [metadata, setMetadata] = useState<PaginationPayload>({
    page: 1,
    pageSize: 10
  })

  useEffect(() => {
    async function getData() {
      await safe(listItems(metadata.page, metadata.pageSize), setData)
    }
    getData()
  }, [])

  useEffect(() => {
    async function setNewMetadata() {
      setMetadata({ ...metadata, totalItems: data?.count })
    }
    setNewMetadata()
  }, [data])

  const handleMetadata = async (newMetadata: Partial<ListMetadata>) => {
    setMetadata({ ...metadata, ...newMetadata })
    await safe(listItems(metadata.page, metadata.pageSize), setData)
  }

  const columns = [
    {
      header: 'Nome',
      accessor: 'name'
    },
    {
      header: 'URL',
      accessor: 'url'
    }
  ]

  const rows =
    data?.results.map((item) => ({
      cells: [
        {
          field: 'name',
          value: item.name
        },
        {
          field: 'url',
          value: item.url
        }
      ]
    })) || []

  return (
    <Flex align={'center'} justify={'center'} p={10}>
      <Box boxShadow={'xl'} w={'full'} p={4} bgColor={'white'}>
        <Table
          headerColumns={columns}
          rows={rows}
          isLoading={isLoading}
          isEmpty={isEmpty}
          metadata={metadata}
          handleSort={handleMetadata}
        />
      </Box>
    </Flex>
  )
}

export default Home
