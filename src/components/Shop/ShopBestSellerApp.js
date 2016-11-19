import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopBody from './ShopBody'
import ShopPage from './ShopPage'

const ShopBestSellerApp = () => (
  <div>
    <HeaderBar2StepApp
      header="Best Seller"
      title1="Shop"
      link1="shop"
      title2="Best Seller"
      link2="best-seller"
    />
    <div className="container">
      <ShopBody />
      <ShopPage />
    </div>
  </div>
)

export default ShopBestSellerApp
