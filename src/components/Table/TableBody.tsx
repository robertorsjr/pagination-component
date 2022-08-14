import React from 'react'
import { BodyCell, BodyProps } from './TableInterfaces'
import { Tbody, Td, Tr } from '@chakra-ui/react'

function TableBody({ rows }: BodyProps) {
  const columnsIsVisible = (item: BodyCell) => {
    return item.field
  }

  return (
    rows && (
      <Tbody>
        {rows.map((row, rowIndex) => {
          const { cells } = row

          const columnsVisible = cells.filter(columnsIsVisible)

          return (
            <Tr key={rowIndex}>
              {columnsVisible.map((cell, cellIndex) => (
                <Td key={cellIndex}>{cell.value}</Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    )
  )
}

export default TableBody
