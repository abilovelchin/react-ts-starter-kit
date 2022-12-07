import React, { MenuHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const list = cva("font-medium px-1 py-2", {
  variants: {
    as: {
      default: "",
      sub: "absolute left-full z-[1] top-0 ml-2 invisible opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-500",
    },
    type: {
      default: "bg-white",
      simple: "bg-white shadow shadow-slate-300",
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
    },
    shape: {
      default: "rounded",
      rounded: "rounded-xl",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    as: "default",
    type: "default",
    shape: "default",
  },
});

interface PropTypes
  extends Omit<MenuHTMLAttributes<HTMLUListElement>, "type">,
    VariantProps<typeof list> {
  children: React.ReactNode;
}

export const List = ({ children, as, type, shape, fullWidth }: PropTypes) => {
  return <ul className={list({ as, type, shape, fullWidth })}>{children}</ul>;
};
