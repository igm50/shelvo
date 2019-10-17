import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import usePartDispatcher from './usePartDispatcher'

it('usePartDispatcherのユニットテスト', () => {
  const TestComponent: React.FC = () => {
    const [strings, updateStrings] = usePartDispatcher(['a', 'b', 'c'])

    return (
      <div>
        {strings.map((value, index) => (
          <p title={String(index)} key={index}>
            {value}
          </p>
        ))}
        <button title="button" onClick={() => updateStrings(1)('d')}></button>
      </div>
    )
  }

  const { getByTitle } = render(<TestComponent />)

  const first = getByTitle('0')
  const second = getByTitle('1')
  const third = getByTitle('2')

  expect(first.textContent).toEqual('a')
  expect(second.textContent).toEqual('b')
  expect(third.textContent).toEqual('c')

  fireEvent.click(getByTitle('button'))

  expect(first.textContent).toEqual('a')
  expect(second.textContent).toEqual('d')
  expect(third.textContent).toEqual('c')
})
