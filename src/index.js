import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloProvider } from "@apollo/client";

import App from "./containers/App";

import client from "./utils/apolloClient";

import "./index.css";
import "./styles/generics.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router basename="/suzanna">
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
);
