import * as React from "react";
import {createContext, useReducer} from "react";
import {reducer} from "./reducer";

const requirementInfo =
  [
    {
      'name': '石田',
      'title': '新宿で焼肉会',
      'place': '新宿',
      'shopName': '肉亭　双子'
    },
    {
      'name': '石田',
      'title': '新宿で焼肉会',
      'place': '新宿',
      'shopName': '肉亭　双子'
    },
    {
      'name': '石田',
      'title': '新宿で焼肉会',
      'place': '新宿',
      'shopName': '肉亭　双子'
    }
  ]

const initialState: any = {
  requirementInfo: requirementInfo,
  loading:false,
  nextRequirementId:0
}

export const Store = React.createContext<any>(initialState)

export const StoreProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  )
}

