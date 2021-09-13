import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TaskStateProvider } from "./state/taskState/TaskStateContext";
import { App } from "./components/App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <TaskStateProvider>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </TaskStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
