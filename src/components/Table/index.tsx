import React from 'react'
import { TableContainerProps } from './TableInterfaces'
import { Box } from '@chakra-ui/react'
import TableComponent from './Table'
import Pagination from '../Pagination'

function Table({
  nameTable,
  isEmpty,
  isLoading,
  pageSizeFixed,
  rows,
  headerColumns,
  handleSort,
  metadata
}: TableContainerProps) {
  return (
    <Box>
      <TableComponent
        key={nameTable}
        headerColumns={headerColumns}
        rows={rows}
        isEmpty={isEmpty}
        isLoading={isLoading}
      />
      <Pagination
        pagination={metadata}
        onPageChange={handleSort}
        pageSizeFixed={pageSizeFixed}
      />
    </Box>
  )
}

export default Table
