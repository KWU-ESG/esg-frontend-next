import { DotLoader } from "react-spinners";
import styled from "@emotion/styled";

const Loading = () => {
  const Div = styled.div``;

  return (
    <div>
      <DotLoader
        color="#36d7b7"
        cssOverride={{}}
        loading
        size={120}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loading;
