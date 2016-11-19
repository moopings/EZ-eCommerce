import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShopTopViewsApp } from '../../components'
import {
  loadProducts,
  clearProducts
} from '../../actions/product'

class ShopTopViewsAppContainer extends Component {
  componentDidMount() {
    this.props.loadProducts('top-view')
  }

  componentWillUnmount() {
    this.props.clearProducts()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.products !== nextProps.products
  }

  render() {
    return (
      <ShopTopViewsApp
        products={this.props.products}
        error={this.props.error}/>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products['products'],
  error: state.products['error']
})

const mapDispatchToProps = ({
  loadProducts,
  clearProducts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopTopViewsAppContainer)
