export const UPDATE_MODAL_DATA = "UPDATE_MODAL_DATA";

export const updateModalData = (payload) => ({
  type: UPDATE_MODAL_DATA,
  payload: payload,
});

const initState = {
  modalState: {},
};

 const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_MODAL_DATA:
      return { ...state, modalState: action.payload };

    default: return state;
  }
};

export default mainReducer;
