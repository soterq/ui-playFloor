import React, { useContext } from "react";

import TenisContext from "../../containers/context/tenis-context";
import {Redirect} from "react-router";
export default function RoomPage() {
  const ctx = useContext(TenisContext);

  if(!ctx.nickName){
    return <Redirect to={"/"}/>
  }
  return <div>Welcome To room page {ctx.nickName}</div>;
}
