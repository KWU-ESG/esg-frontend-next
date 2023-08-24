import styled from '@emotion/styled'
import banner from '../../public/images/banner.png';

// 배너 이미지
const BannerImg = styled.div`
  height : 356px;
  background-image : url(${banner});
  background-size : cover;
  background-position : center;
  background-repeat : no-repeat;
  position : relative;
  margin-bottom : 50px;
`;

// 내부 Title
const BannerTitle = styled.div`
  width : 503px;
  height : 178px;
  border-radius : 20px 20px 0 0;
  background : white;
  position : absolute;
  bottom : 0;
  left : 0;
  right : 0;
  margin : 0 auto;
  padding : 35px;
  text-align : center;
`;

// Banner
export default function Banner(props){
  return(
    <BannerImg>
      <BannerTitle>
        <h2 className="m-3 fs-1">{props.title}</h2>
        <p className="fs-5">{props.subtitle}</p>
      </BannerTitle>
    </BannerImg>
  )
};
