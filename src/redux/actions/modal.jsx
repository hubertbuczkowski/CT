export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const toogleModal =
  (modalName = null, data = {}) =>
  (dispatch) => {
    dispatch({ type: TOGGLE_MODAL, payload: { modalName, data } });
  };
