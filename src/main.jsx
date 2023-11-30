import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import ShopContextProvider from "./Context/ShopContext.jsx";
import store from "./Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <Provider store={store}>
        <App />
      </Provider> 
    </ShopContextProvider>  
  </React.StrictMode>
);
