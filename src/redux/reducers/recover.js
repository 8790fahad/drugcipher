import { LOADING, RECOVER_ACCOUNT } from "../action/actionType";

const initialState = {
  account: {
    success:false,
    token: "",
    info: {},
  },
  loading: false,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case RECOVER_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
