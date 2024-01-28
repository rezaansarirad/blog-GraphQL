
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";


import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/Theme.js";

import "./styles/index.css";
import "./styles/fonts.css";

import { BrowserRouter } from "react-router-dom";



const client = new ApolloClient({
  uri: 'https://api-us-west-2.hygraph.com/v2/clrt1upe90h1e01uu97i9g23t/master',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </BrowserRouter>
   
  </ApolloProvider>
);
