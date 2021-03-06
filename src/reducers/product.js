import {
  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAILURE,

  CLEAR_PRODUCT,
} from 'actionTypes'

const initialState = {
  detail: [],
  error: false,
  isLoading: false
}

const product = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PRODUCT_REQUEST:
      return ({
        detail: [],
        error: false,
        isLoading: true
      })

    case LOAD_PRODUCT_SUCCESS:
      return ({
        detail: [action.payload],
        error: false,
        isLoading: false
      })
    case LOAD_PRODUCT_FAILURE:
      return ({
        detail: [],
        error: true,
        isLoading: false
      })

    case CLEAR_PRODUCT:
      return initialState

    default:
      return state
  }
}

export default product
