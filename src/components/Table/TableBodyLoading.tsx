import { Tbody, Td, Tr, Skeleton } from '@chakra-ui/react'

import { Body, Header } from './TableInterfaces'

interface TableBodyLoadingProps {
  columns: Header[]
  rows?: Body[]
}

const TableBodyLoading = ({ columns, rows = [] }: TableBodyLoadingProps) => {
  const ROWS = rows.length || 4
  return (
    <Tbody bg="white" borderRadius="10px">
      {[...Array(ROWS)].map((_value, rowI) => (
        <Tr key={rowI}>
          {columns.map((_colum, columI) => {
            return (
              <Td key={_colum.accessor || columI}>
                <Skeleton h="5" w="full" />
              </Td>
            )
          })}
        </Tr>
      ))}
    </Tbody>
  )
}

export default TableBodyLoading
