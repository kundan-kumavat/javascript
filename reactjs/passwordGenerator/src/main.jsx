import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Params from './components/Params.jsx';
import Login from './components/Login.jsx'
import Github, { githubInfo } from './components/Github.jsx';
import UserContextProvider from './context/UserContextProvider.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: `params/:id`,
//         element: <Params />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='params/:id' element={<Params />} />
      <Route path='login' element={<Login />} />
      <Route 
      loader={githubInfo}
      path='github' 
      element={<Github />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
