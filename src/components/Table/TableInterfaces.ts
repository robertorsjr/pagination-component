import { HTMLChakraProps } from '@chakra-ui/react'
import { ListMetadata } from '../../@types/generic'

export interface Header {
  header: string
  accessor: string
}

export interface HeaderProps {
  headers: Header[]
}

export type TableRowProps = HTMLChakraProps<'tr'>
export type TableCellProps = HTMLChakraProps<'td'>

export interface BodyCell {
  field: string
  value: string | number
  transform?: (transformProps: {
    item?: BodyCell
    isExpanded?: boolean
    toggleExpanded?: () => Set<number>
  }) => unknown
  isExpandedField?: boolean
  isExportHidden?: boolean
  chackraProps?: TableCellProps
}

export interface Body {
  cells: BodyCell[]
  rows?: TableRowProps
}

export interface BodyProps {
  rows: Body[]
  expandedRows?: Set<number>
}

export interface TableProps {
  id?: string
  headerColumns: Header[]
  rows: Body[]
  isLoading?: boolean
  isEmpty?: boolean
}

export interface TableContainerProps {
  headerColumns: Header[]
  rows: Body[]
  keyProp?: string
  isLoading?: boolean
  isEmpty?: boolean
  nameTable?: string
  pageSizeFixed?: boolean
  metadata: ListMetadata
  handleSort: (params: ListMetadata) => void
}
