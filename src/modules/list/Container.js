import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProductList } from '../list'
import ListProducts from './ListProducts'

function mapStateToProps(state) {
  return {
    products: state.list.data,
    loading: state.list.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProductList: bindActionCreators(fetchProductList, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts)
