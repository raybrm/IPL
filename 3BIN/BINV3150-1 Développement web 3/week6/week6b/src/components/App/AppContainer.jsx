import React from "react";

import App from "./App";
import {ProvideWrapper as OpinionProviderWrapper} from "../../contexts/opinionsContext";

const AppContainer = () => {

  console.log("Render AppContainer")
  
  return (
        <OpinionProviderWrapper>
          <App />
        </OpinionProviderWrapper>
  )

}

export default AppContainer;
