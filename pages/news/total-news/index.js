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
          <Link href="/news/my-news" passHref>
            <A>나의 ESG 뉴스</A>
          </Link>
          <Link href="/news/total-news" passHref>
            <A>ESG 뉴스 모아보기</A>
          </Link>
        </Nav>
        <Container2>
          {/* 뉴스 보여주는 영역 */}
          <News />
        </Container2>
      </Container>

      <Footer />
    </>
  );
}
