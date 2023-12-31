import React from 'react'
import { styled } from "react-cva";

 const Button = styled("button")("button", {
    variants: {
      intent: {
        primary: [
          "bg-gradient-to-r from-[#1c1f27] via-red-500 to-[#1c1f27] hover:bg-gradient-to-r hover:from-red-500 hover:via-[#1c1f27] hover:to-red-500 text-white",
        ],
        secondary: [
          "bg-red-400",
          "text-white",
          "hover:bg-red-600",
        ],
        facebook:[
          'bg-blue-600',
          "text-white",
          "hover:bg-blue-700",

        ],
        default:
          "bg-gray-500 hover:bg-gray-600",
      },
      size: {
        small: [ "py-2", "px-3"],
        medium: [ "py-2", "px-4"],
        large: ["py-4", "px-6"]
      },
      roundness: {
        square: "rounded-none",
        round: "rounded-md",
        pill: "rounded-full",
    },
    },
    compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  });
  
  

  export default Button

