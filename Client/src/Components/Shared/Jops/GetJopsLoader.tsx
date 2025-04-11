import React, { ReactNode, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { fetchAllJops } from "../../../Store/Reducer/GetAllJops";

interface GetJopsLoaderProps {
  children: ReactNode;
  resourceName: string;
}

const GetJopsLoader = ({ children, resourceName }: GetJopsLoaderProps) => {
  const resData = useSelector((state: RootState) => state.Jops);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllJops());
  }, []);

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        [resourceName]: resData,
      });
    }
  });
};

export default GetJopsLoader;
