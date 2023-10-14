import * as S from "../../styles/developer-style";
import Banner from "../../components/layouts/Banner";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import Image from "next/image";
// 개인 프로필 정보 임시 데이터
let teamId = [
  { name: "Kim", city: "Seoul, South Korea" },
  { name: "Hong", city: "Incheon, South Korea" },
  { name: "Ahn", city: "Busan, South Korea" },
  { name: "Lee", city: "Kimpo, South Korea" },
  { name: "Hwang", city: "Daejeon, South Korea" },
  { name: "Seo", city: "Jeonju, South Korea" },
  { name: "Lim", city: "Daegu, South Korea" },
  { name: "Ji", city: "Gochang, South Korea" },
];

/**
 * < TeamPage >
 * map을 통해 프로필 데이터에 접근하여 순차적 출력
 */
export default function DeveloperPage() {
  return (
    <>
      <Header />
      <Banner />
      <S.TitleBox>
        <div>
          <S.Title>What We Do</S.Title>
          <S.Description>
            우리 서비스는 어려운 ESG개념을 보편화하기위하여 출발하였습니다.
            ESG가 어렵기보다는 이제 친숙한 ESG의 사회적 보편화를 위하여
            노력합니다.
          </S.Description>
        </div>
        <div>
          <S.Title>The ultimate goal</S.Title>
          <S.Description>
            소비자가 기업의 ESG 경향을 파악, 분석하고 맞춤 소비를 할 수 있게
            돕습니다. 습득·학습·공유의 3단계로 가치를 창출하려 합니다.
          </S.Description>
        </div>
      </S.TitleBox>

      <S.Profile>
        {teamId.map((i, j) => {
          return (
            <div key={j}>
              <S.ProfileImg>
                <Image
                  src="/images/profile.png"
                  alt="profile"
                  width="200em"
                  height="200em"
                />
              </S.ProfileImg>
              <S.Name>{teamId[j].name}</S.Name>
              <S.City>{teamId[j].city}</S.City>
              <i className="fa-brands fa-facebook-f me-4" />
              <i className="fa-brands fa-twitter mb-5" />
            </div>
          );
        })}
      </S.Profile>
      <Footer />
    </>
  );
}
