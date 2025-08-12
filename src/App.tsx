import LogIn from './pages/login/LogIn';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { Home } from './pages/Home/Home';
import RootLayOut from './components/RootLayOut';
import Error from './pages/error/Error';
const router=createBrowserRouter([
  {path:'/',element:<RootLayOut/>,
    errorElement:(
      <RootLayOut>
<Error/>
      </RootLayOut>
    ),
    children:[
{path: '/', element: <Home />},
  {path: '/login', element: <LogIn />},
    ]
  }
  
  
]);
function App() {
 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
