import React from 'react'
import { Timer, LayoutDashboard, Laptop, Dog } from 'lucide-react'
import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'

type Props = {}

const MENUITEMS = [
  {
    path: '/dashboard/main',
    icon: <LayoutDashboard size={30}/>,
    title: 'Dashboard',
    subtitle: 'Display'
  },
  {
    path: '/dashboard/counter',
    icon: <Timer size={30}/>,
    title: 'Counter',
    subtitle: 'Counter Client Side'
  },
  {
    path: '/dashboard/pokemons',
    icon: <Dog size={30}/>,
    title: 'Pokemons',
    subtitle: 'Static Generation'
  }
] as const

const Sidebar = (props: Props) => {
  return (
    <div id="menu" className="w-[400px] bg-gray-900 min-h-screen z-10 text-slate-300  left-0 overflow-y-scroll">
      <div id="logo" className="my-4 px-6">
        
        <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
          <Laptop className='mr-2'/>
          <span>Dash</span>
          <span className="text-rose-700">8</span>
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image width={50} height={50} className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" alt="User icon" />
          </span>
          <span className="text-sm md:text-base font-bold">
            Bryan Mancilla
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">

        {
          MENUITEMS.map(item => (
            <SidebarMenuItem key={item.path} {...item} />
          ))
        }

        {/* <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
          <div>
            <Timer />
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">Counter</span>
            <span className="text-sm text-slate-500 hidden md:block">Local State</span>
          </div>
        </a> */}


      </div>
    </div>
  )
}

export default Sidebar