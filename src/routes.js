import React, { Component } from 'react'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  Redirect
} from 'react-router'
import { URL_ROOT } from 'endpoint'

import NotFound from './constants/404/NotFound'
import AboutUs from './constants/AboutUs/AboutUs'

import { App } from './components'

import {
  Home,

  ShopApp,
  ShopFeatureApp,
  ShopBestSellerApp,

  ProductListApp,
  ProductDetailApp,

  SearchApp,

  LoginApp,
  LogoutApp,
  RegisterApp,
  RegisterSuccessApp,
  ProfileApp,

  CartApp,
  CheckoutApp,

  OrderHistoryApp,

  ManageApp,
  ManOrderApp,
  ManPromotionApp,
  ManProductApp,
  ManProductCreateApp,
  ManProductUpdateApp,
  ManSupplierApp
} from './containers'

export default (
  <Route path='/'>
    <Route path={`${URL_ROOT}`} component={App}>
      <IndexRoute component={Home} />


      <route path='shop'>
        <IndexRoute component={ShopApp} />
        <route path=':slug' component={ProductDetailApp} />
      </route>
      <Route path='cart' component={CartApp} />
      <Route path='checkout' component={CheckoutApp} />
      <Route path='search' component={SearchApp} />


      <Route path='login' component={LoginApp} />
      <Route path='logout' component={LogoutApp} />
      <route path='register'>
        <IndexRoute component={RegisterApp} />
        <route path='Success' component={RegisterSuccessApp} />
      </route>
      <Route path='profile' component={ProfileApp} />

      <Route path='history' component={OrderHistoryApp} />

      <Route path='manage'>
        <IndexRoute component={ManageApp} />
        <route path='product'>
          <IndexRoute component={ManProductApp} />
          <route path='create' component={ManProductCreateApp} />
          <route path='edit' component={ManProductUpdateApp} />
        </route>
        <route path='order'>
          <IndexRoute component={ManOrderApp} />
        </route>
        <route path='promotion'>
          <IndexRoute component={ManPromotionApp} />
        </route>
        <route path='supplier'>
          <IndexRoute component={ManSupplierApp} />
        </route>
      </Route>

      <Route path='aboutus' component={AboutUs} />
      <Route path='404' component={NotFound} />
      <Redirect from='*' to={`${URL_ROOT}/404`} />
    </Route>
  </Route>
)
