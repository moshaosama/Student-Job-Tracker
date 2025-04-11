import React, { ReactNode, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";

import { fetchFilterJops } from "../../../Store/Reducer/FilterJop";

interface GetJopsLoaderProps {
  children: ReactNode;
  resourceName: string;
  status: string;
}

const GetJopsLoader = ({
  children,
  resourceName,
  status,
}: GetJopsLoaderProps) => {
  const resData = useSelector((state: RootState) => state.filteredJop);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!status) {
      return;
    }
    dispatch(fetchFilterJops(status));
  }, [status, dispatch]);

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        [resourceName]: resData,
      });
    }
  });
};

export default GetJopsLoader;
