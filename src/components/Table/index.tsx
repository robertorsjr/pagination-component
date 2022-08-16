import React, { memo } from 'react'
import { TableContainerProps } from './TableInterfaces'
import { Box } from '@chakra-ui/react'
import TableComponent from './Table'
import { PagePagination } from '../Pagination'

function TableContainer({
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
      <PagePagination
        pagination={metadata}
        onPageChange={handleSort}
        pageSizeFixed={pageSizeFixed}
      />
    </Box>
  )
}

export const Table = memo(TableContainer)
