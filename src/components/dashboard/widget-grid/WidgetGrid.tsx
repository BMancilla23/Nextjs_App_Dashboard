'use client'

import React from 'react'
import { SimpleWidget } from '../simple-widget'
import { ShoppingCart } from 'lucide-react'
import { useAppSelector } from '@/store'

type Props = {}

export const WidgetGrid = (props: Props) => {

  const isCart = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center">
      <SimpleWidget
        title={`${isCart}`}
        subtitle='Productos Agregados'
        label='Contador'
        icon={<ShoppingCart size={70} />}
        href='/dashboard/counter'
      />
    </div>
  )
}