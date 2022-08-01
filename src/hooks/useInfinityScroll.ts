import { useState, useEffect, useCallback, useRef } from 'react'

type InfinityScrollProps = {
  callback: () => void
  loading: boolean
}

export const useInfiniteScroll = ({
  callback,
  loading,
}: InfinityScrollProps) => {
  const [cursor, setCursor] = useState(1)
  const loader = useRef(null)

  useEffect(() => {
    if (loading) return
    const timer = setTimeout(() => callback(), 100)
    return () => clearTimeout(timer)
  }, [cursor])

  const handleObserver = useCallback(
    (entries: any) => {
      if (loading) return
      const entry = entries[0]

      if (entry.isIntersecting) {
        setCursor((prev) => prev + 1)
      }
    },
    [loading]
  )

  useEffect(() => {
    const option = {}
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
  }, [handleObserver])

  return { cursor, loader }
}
