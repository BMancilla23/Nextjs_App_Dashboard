'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, initCounterState, resetCount, substractOne } from '@/store/counter/counterSlice'
import React, { useEffect, useState } from 'react'

type Props = {
  value: number
}

interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(res => res.json());
  console.log(data);
  return data;
}

const CartCounter = ({value = 0}: Props) => {

  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch();

 /*  useEffect(() => {
    dispatch(initCounterState(value))
  
  }, [dispatch, value]) */
  
  useEffect(() => {
    getApiCounter()
      .then(({count}) => dispatch(initCounterState(count)))

  }, [dispatch])
  

 /*  const [counter, setCounter] = useState(value)

  const onIncrement = () => {
    setCounter(counter + 1)
  }

  const onDecrement = () => {
    if (counter > 0) setCounter(counter -1)
  } */

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button  /* onClick={onIncrement} */ onClick={() => dispatch(addOne())} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
        <button /* onClick={onDecrement} */ onClick={() => dispatch(substractOne())} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
      </div>
    </>
  )
}

export default CartCounter