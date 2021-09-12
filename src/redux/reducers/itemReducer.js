import { ActionTypes } from "../constants/action-types";

const intialState = {
  items: [],
  categories: [],
  selectedItem: "",
};

//Methods:


//Reducers: 

export const itemReducer = (state = intialState, { type, payload }) => {
  switch (type) {

    case ActionTypes.SET_ITEMS: 
      return { ...state, items: payload };

    case ActionTypes.SET_CATEGORIES: 
      return { ...state, categories: payload };

    case ActionTypes.SET_SELECTED_ITEM:
      return { ...state, selectedItem: payload };
      
    default:
      return state;
  }
};
