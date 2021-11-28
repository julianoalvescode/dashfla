import React from "react";

import { SidebarContextProvider } from "./Sidebar";
import { AuthContextProvider } from "./Auth";

export function GlobalContext({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <SidebarContextProvider>{children}</SidebarContextProvider>
    </AuthContextProvider>
  );
}
