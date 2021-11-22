import Link from "next/link";
import { useRouter } from "next/router";
import { cloneElement } from "react";
import * as I from "./types";

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: I.ActiveLinkProps) {
  let isActive = false;
  const { asPath } = useRouter();

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }
  return (
    <>
      <Link {...rest}>
        {cloneElement(children, {
          color: isActive ? "pink.400" : "gray.50",
        })}
      </Link>
    </>
  );
}
