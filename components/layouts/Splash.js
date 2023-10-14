import Image from "next/image"; // Next.js Image 컴포넌트를 사용하여 이미지를 표시
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react"; // keyframes 함수를 import합니다.
import Loading from "../Loading";
import { useState, useEffect } from "react";

const Splash = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // 렌더링 완료되면 setLoading False로 변환
    setLoading(false);
  });

  const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;
  const AnimatedDiv = styled(Div)`
    animation: ${fadeIn} 2s ease-in-out;
  `;

  return (
    <AnimatedDiv>
      {loading ? (
        <Loading />
      ) : (
        <Image src="/images/logo.png" alt="logo" width={500} height={550} />
      )}
    </AnimatedDiv>
  );
};

export default Splash;
