import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrival from '../components/Products/NewArrival'
export default function Home() {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrival/>
    </div>
  )
}
