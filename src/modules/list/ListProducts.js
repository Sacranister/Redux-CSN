import React, { Component } from 'react'
import Table from './Table'

class ListProducts extends Component {
  componentDidMount() {
    this.props.fetchProductList()
  }
  buildContent() {
    if (this.props.loading) {
      return (
        <h2>Loading...</h2>
      )
    }

    return (
      <Table data={this.props.products} />
    )
  }
  render() {
    return this.buildContent()
  }
}

ListProducts.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object),
  loading: React.PropTypes.bool,
  fetchProductList: React.PropTypes.func,
}
export default ListProducts
