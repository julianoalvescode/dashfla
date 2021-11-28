import React from "react";

export type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
};

export type AuthContextProvider = {
  children: React.ReactNode;
};

export type SignInCredentials = {
  email: string;
  password: string;
};
