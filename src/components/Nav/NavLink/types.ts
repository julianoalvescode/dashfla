import React from "react";
import { LinkProps } from "next/link";
import { IconType } from "react-icons";

export interface NavLink extends LinkProps {
  children: React.ReactNode;
  icon: IconType;
}
