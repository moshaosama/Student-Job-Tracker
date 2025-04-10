import React, { ReactNode } from "react";
import useFetch from "../../../Hooks/useFetch";

interface GetJopsLoaderProps {
  children: ReactNode;
  resourceName: string;
}

const GetJopsLoader = ({ children, resourceName }: GetJopsLoaderProps) => {
  const { resData } = useFetch("http://localhost:3000/getjops");

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        [resourceName]: resData,
      });
    }
  });
};

export default GetJopsLoader;
