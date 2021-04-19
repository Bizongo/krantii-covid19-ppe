import React, { createContext, useReducer } from 'react';

import user from './user';

const initialState = { user, totalDemand: 0, totalSupply: 0 };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'USER_LOGGED_IN':
        const newState = { ...state, user: { ...state.user, ...action.payload } };
        return newState;
      case 'TOTAL_DEMAND_UPDATED':
        return { ...state, totalDemand: action.payload };
      case 'TOTAL_SUPPLY_UPDATED':
        return { ...state, totalSupply: action.payload };
      default:
        throw new Error('Unrecognized action');
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
