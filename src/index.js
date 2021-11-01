import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const medi4AllTheme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  colors: {
    med: {
      100: "#e3eed7",
      200: "#d6e6c4",
      300: "#c8deb0",
      400: "#bad69c",
      500: "#accd88",
      600: "#9ec574",
      700: "#91bd61",
      800: "#83b44d",
      900: "#75AC39"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={medi4AllTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
