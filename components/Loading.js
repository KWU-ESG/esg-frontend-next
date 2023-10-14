import { DotLoader } from "react-spinners";
import styled from "@emotion/styled";

const Loading = () => {
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  return (
    <Div>
      <DotLoader
        color="#36d7b7"
        cssOverride={{}}
        loading
        size={120}
        speedMultiplier={1}
      />
    </Div>
  );
};

export default Loading;
