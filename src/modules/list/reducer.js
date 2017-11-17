import {
    FETCH_PRODUCT_LIST,
} from './actions'

const initialState = {
  data: [{ name: 'asd', price: 'asd', description: 'asd' }, { name: 'asd2', price: 'asd2', description: 'asd2' }],
  loading: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return { ...state, loading: false }
    default:
      return state
  }
}
