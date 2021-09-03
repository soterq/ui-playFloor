import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import generateRoutes from "../containers/GenericRoutes";
import TenisContext from "../containers/context/tenis-context";

export default function TheContent() {
  const [nickName, setNickName] = useState("");

  const handleChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <TenisContext.Provider
      value={{
        nickName: nickName,
        handleChangeNickName: handleChangeNickName,
      }}
    >
      <Grid>{generateRoutes()}</Grid>
    </TenisContext.Provider>
  );
}
