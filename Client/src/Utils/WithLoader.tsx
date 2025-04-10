import { ComponentType } from "react";
interface newComponentType {
  loading: boolean;
  [key: string]: any;
}

const WithLoader = (Component: ComponentType<any>) => {
  return ({ loading, ...props }: newComponentType) => {
    if (loading) {
      return <h1 className="text-xl font-semibold">Loading...</h1>;
    }
    return <Component {...props} />;
  };
};

export default WithLoader;
