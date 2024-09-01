import React from 'react'
import { Sidebar } from '@/components/shared/Sidebar'
import "./globals.css"
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='root'>
        <Sidebar/>
      <div className='root-container'>
        <div className='wrapper'>
        {children}
        </div>
      </div>

    </main>
  )
}

export default layout

