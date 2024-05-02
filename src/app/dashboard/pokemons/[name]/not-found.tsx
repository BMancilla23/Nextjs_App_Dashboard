import { Sidebar } from '@/components'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-slate-100 w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">

        <Sidebar/>

        <div className="w-full text-slate-900">
          <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-rose-700 text-white px-2 text-sm rounded rotate-12 absolute">
              Pokemón not found
            </div>
            <button className="mt-5 relative inline-block text-sm font-medium text-rose-700 group active:text-rose-500 focus:outline-none focus:ring">

              <span
                className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-rose-700 group-hover:translate-y-0 group-hover:translate-x-0"
              ></span>

              <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                <Link href="/dashboard/main">See pokemon status</Link>
              </span>

            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
