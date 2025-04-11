import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { fetchAllJopByid } from "../../../Store/Reducer/GetJopById";

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
  const resData = useSelector((state: RootState) => state.jopByid);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllJopByid(id));
  }, []);

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
