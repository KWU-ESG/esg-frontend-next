import Header from "../../../components/layouts/Header";
import Footer from "../../../components/layouts/Footer";
import Banner from "../../../components/layouts/Banner";
import {
  Container,
  Container2,
  Nav,
  NavTitle,
  A,
} from "../../../styles/sidebar-style";
import Link from "next/link";
import News from "../../../styles/news/news-list";

export default function NewsPage() {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <Nav>
          <NavTitle>MENU</NavTitle>
          <Link href="/news/my-news">
            <A>나의 ESG 뉴스</A>
          </Link>
          <Link href="/news/total-news">
            <A>ESG 뉴스 모아보기</A>
          </Link>
        </Nav>
        <Container2>
          {/* 뉴스 보여주는 영역 */}
          <p style={{ textAlign: "center" }}>오늘의 ESG 추천 뉴스 입니다!</p>
          <News />
        </Container2>
      </Container>

      <Footer />
    </>
  );
}
