import React, { ReactNode } from "react";
import useFetch from "../../../Hooks/useFetch";

interface GetJopByidLoaderProps {
  children: ReactNode;
  id: string;
  resourceName: string;
}

const GetJopByidLoader = ({
  children,
  id,
  resourceName,
}: GetJopByidLoaderProps) => {
  const { resData } = useFetch(`http://localhost:3000/jop/${id}`);

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        [resourceName]: resData,
      });
    }
    return child;
  });
};

export default GetJopByidLoader;
