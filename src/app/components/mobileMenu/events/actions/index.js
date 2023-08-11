import setIsActive from "./setIsActive";

export const MOBILE_MENU_ACTIONS = {
  setIsActive,
};

const runMobileMenuAction = (actionName, state, payload) => {
  return MOBILE_MENU_ACTIONS[actionName](state, payload);
};

export default runMobileMenuAction;
