import { createContext, useState } from "react";

import * as I from "./types";
import { useRouter } from "next/router";
export const AuthContext = createContext({} as I.AuthContextData);

export function AuthContextProvider({ children }: I.AuthContextProvider) {
  const [isAuthenticated, setAuth] = useState(false);

  const router = useRouter();

  async function signIn({
    email,
    password,
  }: I.SignInCredentials): Promise<void> {
    try {
      router.push("/dashboard");
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
