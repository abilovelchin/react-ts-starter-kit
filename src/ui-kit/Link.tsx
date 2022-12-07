import React, { LinkHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const link = cva("cursor-pointer p-0 hover:text-gray-300 block", {
  variants: {},
  defaultVariants: {},
});

interface PropTypes
  extends LinkHTMLAttributes<HTMLLinkElement>,
    VariantProps<typeof link> {
  children: React.ReactNode;
  icon?: JSX.Element;
}

export const Link = ({ children, icon }: PropTypes) => {
  return (
    <a className={`${icon ? "flex items-center gap-x-2" : ""} ${link({})}`}>
      {icon}
      {children}
    </a>
  );
};
