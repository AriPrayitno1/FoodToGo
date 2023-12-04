import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./Context/ShopContext.jsx";
import { Provider } from "react-redux";
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
