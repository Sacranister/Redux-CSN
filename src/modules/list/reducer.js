import {
    FETCH_PRODUCT_LIST,
} from './actions'

const initialState = {
  data: [{ name: 'Jarron de Ceramica', price: '10.000', description: 'Bonito jarron de ceramica hecho a mano' }, { name: 'Jarro de Greda', price: '8.000', description: 'Hermoso Jarron de Greda hecho a mano' }],
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
