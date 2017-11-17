import React, { Component } from 'react'
import { Link } from 'react-router'

class Row extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.product.name}</th>
        <td>
          <Link to={`product/${this.props.product.name}`}>
            {this.props.product.name}
          </Link>
        </td>
      </tr>
    )
  }
}

Row.propTypes = {
  product: React.PropTypes.shape({
    price: React.PropTypes.string,
    name: React.PropTypes.string,
    description: React.PropTypes.string,
  }),
}

export default Row
