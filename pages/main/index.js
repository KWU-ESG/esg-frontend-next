import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import Banner from "../../components/layouts/Banner";
import card1 from "../../public/images/card1.png";
import card2 from "../../public/images/card2.png";
import card3 from "../../public/images/card3.png";
import Image from "next/image";

// Box 디자인 - border
const BackBox = styled.div`
  width: 80%;
  height: 300px;
  margin: auto;
  border: 10px solid #73bcff;
  border-radius: 50px;
`;

// Box 디자인
const FrontBox = styled.div`
  width: 60%;
  height: 300px;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

// Text
const Text = styled.div`
  width: 80%;
  height: 300px;
  padding: 50px;
  text-align: center;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

// 메인 Title
function Title() {
  return (
    <Container className="p-5">
      <div style={{ position: "relative" }}>
        <BackBox />
        <FrontBox />
        <Text>
          <p className="mb-5">
            ESG는 Environmental(환경), Social(사회), Governance(지배구조)의 영문
            첫글자를 조합한 단어입니다.
          </p>
          <p>
            ESG는 기업이 '지속가능한' 비즈니스를 달성하기 위한 세 가지 핵심
            요소이며 최근 기업의 중장기적 발전을 위한 핵심 비재무적 요소로
            떠오르고 있습니다.
          </p>
        </Text>
      </div>
    </Container>
  );
}

// Card 이미지
const ArticleImg = styled.div`
  height: 350px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 50px;
`;

// Card
// str를 전달하여 사진 위치 변경
function Article(props) {
  return (
    <Container
      className={`p-5 d-flex align-items-center ${
        props.position == "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="p-5 col-sm-5">
        <h3 className="mb-3">{props.title}</h3>
        <p className="mb-3">{props.str}</p>
      </div>

      <ArticleImg className="p-5 col-sm-7" img={props.img} />
      <div style={{ clear: "both" }}></div>
    </Container>
  );
}

/**
 * < 메인 페이지 >
 * 메인 사진
 * 메인 Title
 * Card 1
 * Card 2
 * Card 3
 */
export default function MainPage() {
  return (
    <>
      <Header />
      <Banner />
      <Title />
      <Article
        position="left"
        title="E (Environment)"
        image
        src={card1}
        str="우리 서비스는 어려운 ESG개념을 보편화하기위하여 출발하였습니다. ESG가 어렵기보다는 이제 친숙한 ESG의 사회적 보편화를 위하여 노력합니다."
      />

      <Article
        position="right"
        title="S (Social)"
        img
        src={card2}
        str="소비자가 기업의 ESG경향을 파악, 분석하고 맞춤 소비를 할 수 있게 돕습니다. 습득-학습-공유의 3단계로 가치를 창출하려 합니다."
      />

      <Article
        position="left"
        title="G (Goverment)"
        img
        src={card3}
        str="우리 서비스는 어려운 ESG개념을 보편화하기위하여 출발하였습니다. ESG가 어렵기보다는 이제 친숙한 ESG의 사회적 보편화를 위하여 노력합니다."
      />
      <Footer />
    </>
  );
}
