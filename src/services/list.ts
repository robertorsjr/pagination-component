import { api, endpoints } from './api'

export async function listItems(offset?: number, limit?: number) {
  const { get } = await api
  return get(endpoints.listItems(offset, limit))
}
