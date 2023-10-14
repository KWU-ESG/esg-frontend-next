import styled from "@emotion/styled";
import { Container } from "react-bootstrap";
import Image from "next/image";

export const TitleBox = styled(Container)`
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 7rem;

  & > div {
    width: 40%;
  }
  & > div:last-child {
    text-align: right;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & > div {
      width: 100%;
    }
    & > div:last-child {
      text-align: left;
      margin-top: 3rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.7rem;
`;

// 프로필  Box
export const Profile = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20rem);
  row-gap: 2rem;
  justify-content: space-evenly;
  text-align: center;
`;

// 프로필 이미지
export const ProfileImg = styled.div`
  padding: 1rem;
  border-radius: 1rem;
`;

// 프로필 이름
export const Name = styled.p`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

// 프로필 도시
export const City = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
`;
