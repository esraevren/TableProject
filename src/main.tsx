import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import store from "./features/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  

<MantineProvider withGlobalStyles withNormalizeCSS>
<Provider store={store}>
    <App />
  </Provider>
</MantineProvider>
)
