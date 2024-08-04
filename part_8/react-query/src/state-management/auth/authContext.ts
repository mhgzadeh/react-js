import { Dispatch } from "react";
import React from "react";
import { AuthAction } from "./AuthProvider";

interface AuthTypeContext {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthTypeContext>({} as AuthTypeContext);

export default AuthContext;
