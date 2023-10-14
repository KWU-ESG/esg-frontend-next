import {
  Container,
  Container2,
  Nav,
  NavTitle,
  A,
} from "../../../styles/sidebar-style";
import * as S from "../../../styles/esg-importance-style";
import Link from "next/link";
import Header from "../../../components/layouts/Header";
import Footer from "../../../components/layouts/Footer";
import Banner from "../../../components/layouts/Banner";

// 줄바뀜 시 가독성을 위해 <S.Br>을 추가함
export default function esgImportance() {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <Nav>
          <NavTitle>MENU</NavTitle>
          <Link href="/esg/quiz">
            <A>ESG 퀴즈</A>
          </Link>
          <Link href="/esg/info">
            <A>ESG 개념</A>
          </Link>
          <Link href="/esg/importance">
            <A>ESG 중요성</A>
          </Link>
        </Nav>
        <Container2>
          <S.TextBox>
            <S.Title>
              <S.Br>기업의 가치평가는 전통적으로 </S.Br>
              <S.Br>재무재표를 통해 진행해왔습니다.</S.Br>
            </S.Title>
            <S.Title>실적이 중요했으나, 트렌드가 바뀌어</S.Title>
            <S.Title>
              환경, 사회적 책임, 지배구조의 건전성을 인정받지 못하면{" "}
              <S.Br>기업가치는 제대로 인정받지 못하게 되었습니다.</S.Br>
            </S.Title>
          </S.TextBox>

          <S.TextBox>
            <S.Title>기업이 미래를 보기위해 택한 ESG.</S.Title>
            <S.Title>
              ESG는 <S.Blue>기업의 지속가능성을 유지하게 도와주는 요소</S.Blue>
              입니다.
            </S.Title>
          </S.TextBox>

          <S.TextBox>
            <S.Title>투자자의 ESG 요구 증대,</S.Title>
            <S.Title>고객의 ESG 요구 증대,</S.Title>
            <S.Title>신용평가에 반영,</S.Title>
            <S.Title>
              ESG 관련 정부 규제 강화로 인해{" "}
              <S.Br>ESG의 중요성은 점점 높아지고 있습니다.</S.Br>
            </S.Title>
          </S.TextBox>
        </Container2>
      </Container>
      <Footer />
    </>
  );
}
