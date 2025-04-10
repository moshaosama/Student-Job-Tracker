import { useParams } from "react-router";
import { container } from "../Style";
import GetJopByidLoader from "../Components/Shared/Jops/GetJopByidLoader";
import Jopinfo from "../Components/Jopinfo";

const DetailJop = () => {
  const { id } = useParams();
  return (
    <>
      <div className={container}>
        <GetJopByidLoader resourceName="jops" id={id!}>
          <Jopinfo />
        </GetJopByidLoader>
      </div>
    </>
  );
};

export default DetailJop;
