import { useState, useMemo } from 'react'

type Hook<T> = [T[], (index: number) => (newValue: T) => void]

/**
 * 配列の一部のみを更新するような処理を行う場合に用いる。
 * @param initArray 初期化に用いる配列
 */
const usePartDispatcher = <T>(initArray: T[]): Hook<T> => {
  const [array, setArray] = useState(initArray)

  const update = useMemo(() => {
    return (index: number) => (newValue: T) =>
      setArray(
        array.map((value, number) => (number === index ? newValue : value))
      )
  }, [array])

  return [array, update]
}

export default usePartDispatcher
