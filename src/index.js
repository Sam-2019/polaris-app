import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
// @ts-ignore
import translations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <
// @ts-ignore
  AppProvider i18n={translations}>
    <App />
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
