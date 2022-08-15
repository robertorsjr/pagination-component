import { Table as TableChakra } from '@chakra-ui/react'
import React from 'react'

import TableBodyComponent from './TableBody'
import TableBodyLoading from './TableBodyLoading'
import TableHeaderComponent from './TableHeader'
import { TableProps } from './TableInterfaces'
import AlertEmptyTable from './TableBodyEmpty'

const Table: React.FC<TableProps> = ({
  id,
  headerColumns,
  rows,
  isLoading,
  isEmpty
}: TableProps) => {
  return (
    <TableChakra id={id} variant="striped">
      {isLoading ? (
        <TableBodyLoading columns={headerColumns} rows={rows} />
      ) : isEmpty ? (
        <AlertEmptyTable />
      ) : (
        <>
          <TableHeaderComponent headers={headerColumns} />
          <TableBodyComponent rows={rows} />
        </>
      )}
    </TableChakra>
  )
}

export default Table
