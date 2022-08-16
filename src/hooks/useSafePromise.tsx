import React, { useCallback, useState } from 'react'

function useSafePromise() {
  const [isLoading, setIsLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const [isError, setIsError] = useState(false)

  const safe = useCallback(async (api: any, setData: any) => {
    try {
      setIsLoading(true)
      const { data } = await api
      setIsEmpty(!data)
      setData(data)
    } catch (error) {
      setIsError(!!error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    safe,
    isLoading,
    isEmpty,
    isError
  }
}

export default useSafePromise
