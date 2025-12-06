import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

// layout for dashboard routes 
const layout = ({ children }: {children: React.ReactNode }) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default layout