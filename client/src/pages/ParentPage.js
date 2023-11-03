import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function ParentPage() {
  return (
    <div>
        <Header/>
        <Outlet/> 
        <Footer/>
    </div>
  )
}

export default ParentPage