import React, { Component } from 'react'
import Bar from './Bar'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Bar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
App.propTypes = {
  children: React.PropTypes.element,
}

export default App
