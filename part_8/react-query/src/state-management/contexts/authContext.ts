import { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";
import React from "react";

interface AuthTypeContext {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthTypeContext>({} as AuthTypeContext);

export default AuthContext;
