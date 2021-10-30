import * as React from "react";
import NextJsLink from "next/link";
import { Link } from "@material-ui/core";

type Props = {
  children: any;
  path: string;
  passhref?: boolean;
  wrapLink?: boolean;
};
const NextLink = ({ path, passhref, children, wrapLink }: Props) => {
  return (
    <>
      {wrapLink ? (
        <NextJsLink href={path} passHref={passhref}>
          <Link>{children}</Link>
        </NextJsLink>
      ) : (
        <NextJsLink href={path} passHref={passhref}>
          {children}
        </NextJsLink>
      )}
    </>
  );
};

export default NextLink;
