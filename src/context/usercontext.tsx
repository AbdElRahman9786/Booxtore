// UserContext.tsx
import { createContext } from "react";

export type User = {
  email: string;
  id: string;
  role: string;
};

export type UserContextType = {
  userInfo: User;
  setUserInfo: React.Dispatch<React.SetStateAction<User>>;
};

export const UserInfoContext = createContext<UserContextType>({
  userInfo: { email: "", id: "", role: "" },
  setUserInfo: () => {}
});
