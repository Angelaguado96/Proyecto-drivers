import * as React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' //  traido de  libreria NPM 
import { Provider } from 'react-redux' //  lo traigo de  la libreria NPM
import store from './Redux/store.js' // me traigo a  mi store  creado 



ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    
      <App />
    
    </BrowserRouter>
  </React.StrictMode>,
  </Provider>
   
)
