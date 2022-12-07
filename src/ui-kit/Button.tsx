import React, { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import LoadingIcon from "./icons/loading.icon";

const button = cva("font-medium hover:bg-opacity-90 text-white", {
  variants: {
    type: {
      default: "",
      primary: "bg-primary text-white",
      secondary: " bg-secondary",
      danger: " bg-[rgb(225,29,72)]",
      link: "bg-transparent text-blue-500",
      muted: "bg-gray-100 hover:bg-gray-200 text-gray-600",
    },
    size: {
      sm: "py-0.5 pb-1 px-3",
      md: "py-1 pb-1.5 px-3",
      lg: "py-2 pb-2.5 px-5",
      xl: "py-3 pb-3.5 px-6",
    },
    shape: {
      default: "rounded",
      rounded: "rounded-full",
      circle: "rounded-full w-10 h-10 p-0",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "bg-gray-200 hover:bg-opacity-100 cursor-default text-gray-400",
    },
    loading: {
      true: "bg-opacity-60",
    },
  },
  defaultVariants: {
    type: "default",
    size: "md",
    shape: "default",
  },
});

interface PropTypes
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled" | "type">,
    VariantProps<typeof button> {
  children?: React.ReactNode;
  icon?: JSX.Element;
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  icon,
  loading,
  type,
  size,
  shape,
  fullWidth,
  disabled,
  htmlType,
  ...actions
}: PropTypes) => {
  return (
    <button
      {...actions}
      type={htmlType || "submit"}
      className={`${
        icon || loading ? "flex items-center gap-x-2" : ""
      } ${button({
        type,
        size,
        shape,
        disabled,
        fullWidth,
        loading,
      })}`}
    >
      {loading ? <LoadingIcon className="w-4 h-4 animate-spin" /> : icon}
      {children}
    </button>
  );
};
