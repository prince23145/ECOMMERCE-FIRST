import React from 'react'
import Header from "../Common/Header"
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

export default function UserLayout() {
  return (
 <>
    {/* header */}
    <Header/>
    {/*  mainlayout*/}
    <main>
      <Outlet/>
    </main>
    {/* footer */}
    <Footer/>
 </>
  )
}
