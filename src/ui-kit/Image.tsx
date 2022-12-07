import { ImgHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const image = cva("", {
  variants: {
    shape: {
      default: "rounded",
      rounded: "rounded-xl",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    shape: "default",
  },
});

interface PropTypes
  extends ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof image> {}

export const Image = ({ shape, ...props }: PropTypes) => {
  return <img {...props} className={image({ shape })} />;
};
