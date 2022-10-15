import {ADD_ITEM_TO_CART, CARTLIST, REMOVECARTITEM} from '../action/actionType'

const initialState = {
 cartList: [],
 addItemToCart: {},
//  totalCart: 0
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CARTLIST:
      return {
        ...state,
        cartList: action.cartList,
      };
      case ADD_ITEM_TO_CART:
        return {
          ...state,
          cartList: [...state.cartList,action.payload]
        };
      case REMOVECARTITEM:
      return {
        ...state,
        // cartList: a
      };
    default:
      return state;
  }
}
