import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import { URL_ROOT } from 'endpoint'

const ProductItem = ({ product, onClickedAddToCart }) => (
  <div className="col s12 l3" >
    <div className="card center" >
      <div className="card-image waves-effect waves-block waves-light" >
        <img className="activator" src={product.picture} />
      </div>
      <div className="card-content" >
        <span className="sb-brand left" >
          {product.brand}
        </span> <br />
        <div className="sb-product-name" >
          <Link to={`${URL_ROOT}/product/${product.slug}`}>{product.name}</Link>
        </div>
        <div className="sb-price" >
            Price: {product.price}
        </div>
        <div className="sb-add-to-cart" >
            <a onClick={onClickedAddToCart}><img src="/static/images/add_to_cart_red.png" /></a>
        </div>
      </div>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    types: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  }).isRequired,
}

export default ProductItem
