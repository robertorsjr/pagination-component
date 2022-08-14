export interface ListMetadata extends PaginationPayload, ListQueryParameters {}

export interface PaginationPayload extends PaginationQueryParameters {
  totalPages?: number
  totalItems?: number
}

export type ListQueryParameters = PaginationQueryParameters

interface PaginationQueryParameters {
  page?: number
  pageSize?: number
}
