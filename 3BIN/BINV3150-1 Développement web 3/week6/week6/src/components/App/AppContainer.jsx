import React from "react";

import App from "./App";
import { ProvideWrapper as ButtonsProviderWrapper} from "../../contexts/countersContext";

const AppContainer = () => {

  console.log("Render AppContainer")
  
  return (
      <ButtonsProviderWrapper>
        <App />
      </ButtonsProviderWrapper>
  )

}

export default AppContainer;
