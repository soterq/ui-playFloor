import React, { useContext } from "react";

import TenisContext from "../../containers/context/tenis-context";

export default function RoomPage() {
  const ctx = useContext(TenisContext);

  return <div>Welcome To room page {ctx.nickName}</div>;
}
