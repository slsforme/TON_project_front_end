// locals 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// libs 
import {TonConnectUIProvider} from "@tonconnect/ui-react"
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';


const manifestUrl = 'https://gist.githubusercontent.com/siandreev/75f1a2ccf2f3b4e2771f6089aeb06d7f/raw/d4986344010ec7a2d1cc8a2a9baa57de37aaccb8/gistfile1.txt';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
      <App />
  </TonConnectUIProvider>
)