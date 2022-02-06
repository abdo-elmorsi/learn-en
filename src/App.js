import React, { StrictMode, useEffect } from "react";
import './styles/globals.scss'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-loading-skeleton/dist/skeleton.css'

const AppRouter = React.lazy(() => import("./Routes/Routes/App"));
const App = () => {
  useEffect(() => {
    const online = () => toast.warning("Back Online");
    const offline = () => toast.warning("No Connection");
    window.addEventListener("online", online);
    window.addEventListener("offline", offline);
  }, []);
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
