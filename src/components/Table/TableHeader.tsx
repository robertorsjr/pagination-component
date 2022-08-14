import React from 'react'
import { HeaderProps } from './TableInterfaces'
import { Th, Thead, Tr } from '@chakra-ui/react'

function TableHeader({ headers }: HeaderProps) {
  return (
    headers && (
      <Thead>
        <Tr>
          {headers.map((headerColumn, index) => {
            const { header, accessor } = headerColumn
            return <Th key={index}>{header}</Th>
          })}
        </Tr>
      </Thead>
    )
  )
}

export default TableHeader
