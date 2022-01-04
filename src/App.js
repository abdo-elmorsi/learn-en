import React, { StrictMode } from "react";
import './styles/globals.scss'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-loading-skeleton/dist/skeleton.css'

import AppRouter from "./Routes/Routes/App";
const App = () => {
  window.addEventListener('offline', () => toast.error("You Are Offline Now"));
  window.addEventListener('online', () => toast.success("You Are Online Now"));
  return (
    <StrictMode>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AppRouter />
    </StrictMode>
  )
}

export default App;
