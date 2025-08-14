import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { Footer } from "./Footer";

type childrenProps = {
  children?: React.ReactNode;
}
const RootLayOut = ({children}:childrenProps) => {
  return (
    <>
    <Navbar/>
    {children}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayOut