export interface ListMetadata extends PaginationPayload, ListQueryParameters {}

export interface PaginationPayload extends PaginationQueryParameters {
  totalPages?: number
  totalItems?: number
}

interface PaginationQueryParameters {
  page?: number
  pageSize?: number
}

interface SortingQueryParameters {
  sortingProperty?: string
  sortingDirection?: 'ASC' | 'DESC'
}

export interface ListQueryParameters
  extends SortingQueryParameters,
    PaginationQueryParameters {}

interface PaginationQueryParameters {
  page?: number
  pageSize?: number
}
