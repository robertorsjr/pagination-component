import React from 'react'

import { Tbody, Td, Tr } from '@chakra-ui/react'

const AlertEmptyTable = () => {
  return (
    <Tbody>
      <Tr>
        <Td>Nenhum dado encontrado!</Td>
      </Tr>
    </Tbody>
  )
}

export default AlertEmptyTable
