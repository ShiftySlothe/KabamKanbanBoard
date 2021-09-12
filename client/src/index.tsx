import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppStateProvider } from "./state/AppStateContext";
import { App } from "./components/App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
