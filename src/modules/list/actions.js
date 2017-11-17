export const FETCH_PRODUCT_LIST = 'FETCH_PPRODUCT_LIST'
export const LOADING_PRODUCT_LIST = 'LOADING_PRODUCT_LIST'

export function fetchProductList() {
  return dispatch => {
    dispatch({ type: LOADING_PRODUCT_LIST, payload: true })
    dispatch({ type: FETCH_PRODUCT_LIST, payload: [{ name: 'asd', price: 'asd', description: 'asd' }, { name: 'asd2', price: 'asd2', description: 'asd2' }] })
  }
}
