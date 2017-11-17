import React, { Component } from 'react'
import Row from '../Row'

class Table extends Component {
  constructor(props) {
    super(props)
    this.buildRows = this.buildRows.bind(this)
  }

  buildRows() {
    if (this.props.data) {
      return this.props.data.map((item) => {
        const product = {
          name: item.name,
          price: item.price,
          description: item.description,
        }

        return <Row key={product.name} product={product} />
      })
    }
    return <tr><td>No hay</td></tr>
  }

  render() {
    return (
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>price</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {this.buildRows()}
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default Table
