import '@mantine/core/styles.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createTheme, MantineProvider } from '@mantine/core';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
      <Toaster />
    </MantineProvider>
  </React.StrictMode>,
)
