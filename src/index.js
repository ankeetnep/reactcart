import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, theme} from "@chakra-ui/react"
import {Provider} from "react-redux"
import store from "./redux/store.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
     </Provider>
    </React.StrictMode>
);