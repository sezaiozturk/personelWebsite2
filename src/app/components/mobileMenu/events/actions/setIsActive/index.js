const setIsActive = (state, payload) => {
  state.isActive = typeof payload !== "undefined" ? payload : !state.isActive;
  return {
    state,
    payload,
  };
};
export default setIsActive;
