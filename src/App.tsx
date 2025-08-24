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
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import  Regester  from './pages/regester/Regester';
import UserContext from './context/usercontextProvider';
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
  {path: '/register', element: <Regester/>}, 
    ]
  }
  
  
]);
function App() {
 const queryClient = new QueryClient()

  return (
    <>

    <QueryClientProvider client={queryClient}>
      <UserContext>
      <RouterProvider router={router} />
      </UserContext>
      </QueryClientProvider>
    </>
  )
}

export default App
