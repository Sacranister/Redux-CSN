import React, { Component } from 'react'

class Products extends Component {
  render() {
    const { name, price, description } = this.props
    return (
      <div className="product-item">
        <div className="product-main-data">
          <div className="product-name">
            {name}
          </div>
          <div className="product-price">
            ${price}
          </div>
          <div className="product-description">
            {description}
          </div>
        </div>
      </div>
    )
  }
}
Products.propTypes = {
  name: React.PropTypes.string,
  price: React.PropTypes.string,
  description: React.PropTypes.string,
}
export default Products
