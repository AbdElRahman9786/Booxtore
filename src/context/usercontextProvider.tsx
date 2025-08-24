import {useState, type ReactNode } from 'react';
import { UserInfoContext, type User } from './usercontext';













function UserContext({children}:{children:ReactNode}){
    const [userInfo,setUserInfo]=useState<User>({ email: "",
  id: "",
  role: "",})

    return(
        <UserInfoContext.Provider value={{userInfo,setUserInfo}}>
            {children}
        </UserInfoContext.Provider>
    )

}

export default UserContext