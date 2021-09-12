import { ActionTypes } from "../constants/action-types";

export const setItems = (filter) => {
  return {
    type: ActionTypes.SET_ITEMS,
    payload: filter,
  };
};

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories,
  };
};

export const setSelectedItem = (id) => {
  return {
    type: ActionTypes.SET_SELECTED_ITEM,
    payload: id,
  };
};


