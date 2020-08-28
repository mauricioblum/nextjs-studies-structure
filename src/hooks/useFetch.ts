/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr'
import api from '../services/api'
import { ConfigInterface } from 'swr/dist/types'

export function useFetch<Data = any, Error = any>(
  url: string,
  config?: ConfigInterface<Data, Error>
) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async url => {
      const response = await api.get(url)

      return response.data
    },
    config
  )

  return { data, error, mutate }
}
