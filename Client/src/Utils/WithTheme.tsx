import React from "react";
import useTheme from "../Hooks/useTheme";

interface newComponentProps {
  [key: string]: any;
}

const WithTheme = (Component: React.ComponentType<any>) => {
  return ({ ...props }: newComponentProps) => {
    const { theme } = useTheme();
    return (
      <div
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-black text-white"
        } m-0`}
      >
        <Component {...props} />
      </div>
    );
  };
};

export default WithTheme;
