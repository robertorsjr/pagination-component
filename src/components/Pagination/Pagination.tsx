import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'

import Button from '../Button'
import { DOTS, usePagination } from '../../hooks/usePagination'

interface PaginationProps {
  onPageChange: (page: number) => void
  totalCount: number
  currentPage: number
  pageSize: number
}

const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize
  })
  const lastPage = paginationRange?.[paginationRange?.length - 1]

  if (currentPage === 0 || (paginationRange && paginationRange?.length < 2)) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  return (
    <Flex mt={4} gridGap="24px" justify="center" marginTop="0">
      <Button variant="ghost" disabled={currentPage === 1} onClick={onPrevious}>
        <ChevronLeftIcon />
      </Button>
      {paginationRange?.map((pageNumber, idx) => {
        const IS_CURRENT_PAGE = pageNumber === currentPage

        if (pageNumber === DOTS) {
          return (
            <Button variant="ghost" key={`${idx}-${pageNumber}`}>
              {DOTS}
            </Button>
          )
        }

        return (
          <Button
            variant={IS_CURRENT_PAGE ? 'solid' : 'link'}
            key={`${idx}-${pageNumber}`}
            onClick={() => onPageChange(Number(pageNumber))}
            disabled={IS_CURRENT_PAGE}
            _disabled={{
              cursor: 'default',
              opacity: IS_CURRENT_PAGE && '100%'
            }}
          >
            {pageNumber}
          </Button>
        )
      })}
      <Button
        variant="ghost"
        disabled={lastPage === currentPage}
        onClick={onNext}
      >
        <ChevronRightIcon />
      </Button>
    </Flex>
  )
}

export default Pagination
