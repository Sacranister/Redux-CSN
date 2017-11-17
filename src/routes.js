import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Container as ProductList } from './modules/list'
import App from './Components/App'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={ProductList} />
    <Route path="products" component={ProductList} />
  </Route>
)
