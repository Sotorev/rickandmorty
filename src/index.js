import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Characters, {loader as charactersLoader} from './routes/Characters';
import Locations from './routes/Locations';
import RM from './routes/RickAndMortyHome'
import App, {loader as rootLoader} from './routes/App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Episodes, {episodesLoader} from './components/Episodes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: "characters/:page",
        element: <Characters />,
        loader: charactersLoader,
      },
      {
        path: "locations/",
        element: <Locations/>
      },
      {
        index: true,
        element: <RM/>
      },
      {
        path: "episodes/",
        element: <Episodes />,
        loader: episodesLoader,
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
