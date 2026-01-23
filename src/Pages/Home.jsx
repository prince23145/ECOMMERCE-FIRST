import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrival from '../components/Products/NewArrival'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'
export default function Home() {

  const placeHolderProducts=[
      { 
      _id:1,
      name: "Product 1",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=2"}]
    },
    { 
      _id:2,
      name: "Product 2",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=2"}]
    },
    { 
      _id:3,
      name: "Product 3",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=3"}]
    },
    { 
      _id:4,
      name: "Product 4",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=4"}]
    },
      { 
      _id:5,
      name: "Product 5",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=5"}]
    },
    { 
      _id:2,
      name: "Product 2",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=6"}]
    },
    { 
      _id:3,
      name: "Product 3",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=7"}]
    },
    { 
      _id:4,
      name: "Product 4",
    price: 120,
    image:[{url:"https://picsum.dev/500/500?random=8"}]
    },
  ]

  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrival/>

        {/* bestsaller section */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        <ProductDetails/>

        <div className='container mx-auto'>
          <h2 className='text-3xl text-center font-medium mb-4 '>
            TOP WEAR FOR WOMEN
          </h2>
          <ProductGrid products={placeHolderProducts}/>
        </div>

        <FeaturedCollection/>
        <FeaturesSection/>
    </div>
  )
}
