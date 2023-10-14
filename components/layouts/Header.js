import { useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styled from "@emotion/styled";
import Link from "next/link";

// 로그인 박스 스타일
const LoginBox = styled.button`
  display: flex;
  align-items: center;
`;

/**
 * < Header >
 * 부트스트랩 Navbar 사용
 * 로그인 상태에 따라 프로필 표기 ( 차후 수정 )
 */
export default function Header() {
  const router = useRouter();

  //경로 넣기
  const onClickMove = () => {
    router.push("/login");
  };

  return (
    <>
      <Navbar className="my-3 justify-space-between" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">LOVESG</Navbar.Brand>
          <Nav>
            <Nav.Link className="me-4" href="/home">
              HOME
            </Nav.Link>
            <Nav.Link className="me-4" href="/news">
              나의ESG
            </Nav.Link>
            <Nav.Link className="me-4" href="/esg/info">
              ESG학습
            </Nav.Link>
            <Nav.Link className="me-4" href="/forum">
              포럼
            </Nav.Link>
            <Nav.Link href="/developer">LOVESG 팀소개</Nav.Link>
          </Nav>
          <LoginBox onClick={onClickMove}>로그인</LoginBox>
        </Container>
      </Navbar>
    </>
  );
}
