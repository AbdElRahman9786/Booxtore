import {useState, type ReactNode } from 'react';
import { InfoContext, type User } from './UserInfoContext';













function UserContext({children}:{children:ReactNode}){
    const [userInfo,setUserInfo]=useState<User>({ email: "",
  id: "",
  role: "",})

    return(
        <InfoContext.Provider value={{userInfo,setUserInfo}}>
            {children}
        </InfoContext.Provider>
    )

}

export default UserContext