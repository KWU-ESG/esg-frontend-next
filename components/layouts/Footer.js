import styled from '@emotion/styled';

// 글자 간격 조정
const TextStyle = styled.div`
  line-height : 3rem;
`;

// 외부 Footer 영역 설정
const OuterWrapper = styled.div`
  background : #EAF5FF;
  margin-top : 200px;
`;

// 내부 grid 설정
const InnerWrapper = styled.div`
  width : 70%;
  padding : 50px;
  margin : auto;
  display : grid;
  grid-template-columns : 1fr 1fr;
`;


/**
 * < Footer >
 * 좌우 2열 + 하단 구성
 */
export default function Footer(){
  return(
    <OuterWrapper>
      <InnerWrapper>
        <div className='p-5'>
          <TextStyle className='fs-4'>LOVESG</TextStyle>
          <TextStyle>Hello, feel free to contact LOVESG anytime.</TextStyle>
          <TextStyle className='mb-4'>
            <i className="fa-brands fa-facebook-f me-5"></i>
            <i className="fa-brands fa-twitter me-5"></i>
            <i className="fa-brands fa-linkedin-in me-5"></i>
            <i className="fa-brands fa-instagram me-5"></i>
          </TextStyle>
        </div>

        <div className='p-5'>
          <TextStyle className='fs-4'>Contact</TextStyle>
          <TextStyle>21, Gwangun-ro, Nowon-gu,</TextStyle>
          <p className='mb-4'>Seoul, Republic of Korea</p>
          <TextStyle>dasapcr@gmail.com</TextStyle>
          <TextStyle>(+82) 10-2572-0000</TextStyle>
        </div>
      </InnerWrapper>

      <p className="pb-5 text-center">&copy; 2023. LOVESG All rights reserved.</p>
    </OuterWrapper>
  )
};
