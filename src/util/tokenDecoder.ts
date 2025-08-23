import { jwtDecode } from "jwt-decode";

type info={
    email:string,
    exp:number,
    iat:number,
    id:string,
    role:string
}
function decodeToken(token:string):info{
const decoded = jwtDecode(token) as info;

return decoded

}

export default decodeToken