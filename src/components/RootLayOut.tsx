import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

type childrenProps = {
  children?: React.ReactNode;
}
const RootLayOut = ({children}:childrenProps) => {
  return (
    <>
    <Navbar/>
    {children}
    <Outlet/>
    </>
  )
}

export default RootLayOut