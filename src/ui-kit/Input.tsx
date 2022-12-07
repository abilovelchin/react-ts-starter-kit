import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const input = cva("", {
  variants: {
    type: {
      default: "bg-white border border-gray-300 focus-within:border-gray-400",
      primary:
        "bg-primary border border-primary focus-within:border-primary-hover text-white placeholder-gray-500",
    },
    size: {
      sm: "py-1 px-2",
      md: "p-2",
      lg: "p-3",
    },
    // border: {
    //   default: "border border-gray-300 focus-within:border-gray-400",
    // },
    shape: {
      default: "rounded",
      rounded: "rounded-lg",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    type: "default",
    size: "md",
    shape: "default",
  },
});

interface PropTypes
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "prefix" | "type"
    >,
    VariantProps<typeof input> {
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  htmlType?: HTMLInputTypeAttribute;
}

export const Input = ({
  type,
  size,
  shape,
  prefix,
  suffix,
  htmlType,
  ...props
}: PropTypes) => {
  return (
    <div className={`${prefix || suffix ? "flex items-center gap-x-2" : ""}`}>
      {prefix}
      <div className={`${input({ type, shape, size })}`}>
        <input
          type={htmlType}
          {...props}
          className="focus:outline-none border-0 bg-transparent w-full"
        />
      </div>
      {suffix}
    </div>
  );
};
