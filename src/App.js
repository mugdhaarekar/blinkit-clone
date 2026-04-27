import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux"
import './App.css';
import Dashboard from './components/Dashboard';
import store from "../src/utils/redux/store"
import Checkout from './components/Checkout';

function App() {
  const appRouter = createBrowserRouter(
    [{
      path: "/",
      element: <Dashboard/>
    },
    { path:"/checkout", element:<Checkout />}
  ])

  return (
    <Provider store={store}>
      <div className="bg-gray-50 min-h-screen">
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
