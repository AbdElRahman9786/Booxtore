import { createContext, useState, type ReactNode } from 'react';


type user={

   email?:string,
    id?:string,
    role?:string,


}

type value={
    userInfo:{
         email?:string,
    id?:string,
    role?:string,
    },
    setUserInfo:()=> void
}




export const userContext = createContext<user>({email:'',id:'',role:''});



function UserContext({children}:{children:ReactNode}){
    const [userInfo,setUserInfo]=useState()

    return(
        <userContext.Provider value={{userInfo,setUserInfo}}>
            {children}
        </userContext.Provider>
    )

}

export default UserContext