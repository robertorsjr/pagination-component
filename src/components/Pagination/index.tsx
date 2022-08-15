import { Box, Flex, Select, Text } from '@chakra-ui/react'

import Pagination from './Pagination'
import { PaginationPayload } from '../../@types/generic'

interface PagePaginationProps {
  pagination: PaginationPayload
  onPageChange: (payload: Partial<PaginationPayload>) => void
  pageSizeFixed?: boolean
}

const PagePagination = ({
  pagination,
  onPageChange,
  pageSizeFixed
}: PagePaginationProps) => {
  return (
    <Flex
      flexDir={{ lg: 'row', md: 'column', sm: 'column' }}
      alignItems="center"
      justify="space-between"
      mt="40px"
      gridRowGap={4}
    >
      {!!pagination && (
        <>
          <Flex ml="1%" alignItems="center">
            <Text color="gray.500" alignSelf="center">
              Linhas
            </Text>
            {!pageSizeFixed && (
              <Box width="127px">
                <Select
                  color="gray.300"
                  backgroundColor="white"
                  ml="10%"
                  value={pagination.pageSize}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    onPageChange({
                      pageSize: parseInt(e.target.value),
                      page: 1
                    })
                  }
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="40">40</option>
                  <option value="80">80</option>
                </Select>
              </Box>
            )}
          </Flex>
          <Pagination
            onPageChange={(page: number) => onPageChange({ page })}
            totalCount={pagination.totalItems || 0}
            currentPage={Number(pagination.page)}
            pageSize={pagination.pageSize || 0}
          />
        </>
      )}
    </Flex>
  )
}

export default PagePagination
