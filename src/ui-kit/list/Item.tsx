import React, { LiHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import ChevronRightIcon from "$uikit/icons/chevron-right.icon";

const item = cva("py-1.5 px-3 relative cursor-default", {
  variants: {
    hasSub: {
      true: "group",
    },
  },
  defaultVariants: {},
});

interface PropTypes
  extends LiHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof item> {
  children: React.ReactNode;
  icon?: JSX.Element;
}

export const Item = ({ children, icon, hasSub }: PropTypes) => {
  const checkHasSub =
    typeof children == "object" &&
    (children as any).some((f: JSX.Element) => f.props?.as == "sub");

  return (
    <li
      className={`${
        icon || checkHasSub ? "flex items-center gap-x-2" : ""
      } ${item({ hasSub })}`}
    >
      {icon}
      <span className="flex-1">{children}</span>
      {checkHasSub && <ChevronRightIcon className="-mr-2" />}
    </li>
  );
};
