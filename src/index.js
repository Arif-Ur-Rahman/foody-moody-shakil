import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import CartContextProvider from './context/rootContext';

// ReactDOM.render(<RouterProvider router={router}/>, document.getElementById('root'));
createRoot(document.getElementById("root")).render(
<CartContextProvider>

<App/>
</CartContextProvider>
);
  
