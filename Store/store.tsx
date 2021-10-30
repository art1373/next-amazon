import * as React from "react";
import Cookies from "js-cookie";

interface State {
  darkMode: boolean;
}

interface StoreContext {
  state: State;
  dispatch: any;
}

export const Store = React.createContext<StoreContext>({} as StoreContext);

const initialState: State = {
  darkMode: Cookies.get("darkMode") === "ON" ? true : false,
};

export enum Dispatch {
  ENABLE_DARK_MODE = "DARK_MODE_ON",
  DISABLE_DARK_MODE = "DARK_MODE_OFF",
}

function reducer(state: State, action: any) {
  switch (action.type) {
    case Dispatch.ENABLE_DARK_MODE:
      return { ...state, darkMode: true };
    case Dispatch.DISABLE_DARK_MODE:
      return { ...state, darkMode: false };
    default:
      return state;
  }
}

export function Provider({ children }: { children: any }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
