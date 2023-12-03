import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './src/components/header/header'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-grow flex justify-center items-center h-full bg-[#0D1117]">
        <Outlet />
      </main>
      <footer className="bg-[#0D1117] text-center text-white p-3">
        <a href="https://github.com/isin75/Git_brouser_vite">by ISIN</a>
      </footer>
    </div>
  )
}

export default Layout
