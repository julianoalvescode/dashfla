import React from "react";

import { SidebarContextProvider } from "./Sidebar";

export function GlobalContext({ children }: { children: React.ReactNode }) {
  return <SidebarContextProvider>{children}</SidebarContextProvider>;
}
