import LogIn from './pages/login/LogIn';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { Home } from './pages/Home/Home';
const router=createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/login', element: <LogIn />},
  
]);
function App() {
 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
