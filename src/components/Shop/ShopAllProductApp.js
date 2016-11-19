import React from 'react'
import { HeaderBar2StepApp } from '../App/HeaderBarApp'
import ShopMenu from './ShopMenu'
import renderShopList from './ShopList'

const ShopAllProductApp = ({products, error}) => (
  <div>
    <HeaderBar2StepApp
      header="All Products"
      title1="Shop"
      link1="shop"
      title2="All Products"
      link2="all"
    />
    <div className="container">
      <div className="row">
        <ShopMenu />
        {renderShopList(products, error)}
      </div>
    </div>
  </div>
)

export default ShopAllProductApp