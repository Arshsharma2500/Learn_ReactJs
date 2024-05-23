import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PassWdGenerator from "./PassWdGenerator.jsx";
import CurrencyApp from './CurrencyConvPJ/CurrencyApp.jsx';
import Layout from './Layout.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TodoList from './ToDoList/TodoList.jsx';

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <App />
  //       },
  //       {}
  //     ] 
  //   }
  // ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/pass' element={<PassWdGenerator />} />
      <Route path='/currencyapp' element={<CurrencyApp />} />
      <Route path='/todolist' element={<TodoList />} />
    </Routes>
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}

  </React.StrictMode>,
)
