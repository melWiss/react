export const productListReducer= (state = {products: []}, action ) =>{
    switch (action.type) {
        case 'PRODUCT_DETAILS_REQUEST':
          return { ...state, loading: true }
        case 'PRODUCT_DETAILS_SUCCESS':
          return { loading: false, product: action.payload }
        case 'PRODUCT_DETAILS_FAIL':
          return { loading: false, error: action.payload }
        default:
          return state
}
}