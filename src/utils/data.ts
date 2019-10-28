import { useState, useEffect } from 'react'
import axios from 'axios'

import { Data } from '../react-app-env'

export function useData(): Data | undefined {
  const [data, setData] = useState<Data>()

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get<Data>(`https://panjs.com/ywc.json`)
      setData(data)
    })()
  }, [])

  return data
}
