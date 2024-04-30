'use client'

import React, { useState } from 'react'

type Props = {
  value: number
}

const CartCounter = ({value = 0}: Props) => {

  const [counter, setCounter] = useState(value)

  const onIncrement = () => {
    setCounter(counter + 1)
  }

  const onDecrement = () => {
    if (counter > 0) setCounter(counter -1)
  }

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button onClick={onIncrement} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
        <button onClick={onDecrement} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
      </div>
    </>
  )
}

export default CartCounter