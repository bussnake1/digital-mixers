import { useEffect, useState } from 'react'

export default function useFetch<DataType>(url: string): {
  loading: boolean
  data: DataType
  error: Error
} {
  const [loading, setLoading] = useState(true)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<DataType>([] as unknown as DataType)
  const [error, setError] = useState<Error>(null as unknown as Error)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setError(error)
      })
  }, [url])

  return {
    loading,
    data,
    error
  }
}
