import { TOGGLE_MODAL } from "../actions/modal";

type State = {
  openModal: string,
  data: Object,
};

const initialState: State = {
  openModal: null,
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        openModal: action.payload.modalName,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
