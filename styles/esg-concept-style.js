import styled from '@emotion/styled'

export const Title = styled.p`
  font-size : 1.3rem;
  line-height : 2rem;
  margin-bottom : 1.5rem;
`;

export const CardBox = styled.div`
  margin: 3rem 0;
  text-align : left;
  display : flex;
  justify-content : space-evenly;

  @media (max-width : 768px){
    flex-direction : column;
  }
`;

export const Card = styled.div`
  width : 30%;
  padding : 1.5rem;
  border : 0.5px solid #EAEAEA;
  border-radius : 1rem;

  @media (max-width : 768px){
    width : 100%;
    margin-bottom : 1rem;
  }
`;

export const CardHeader = styled.h4`
  border-bottom : 1px solid #EAEAEA;
  padding : 0.5rem 0.5rem 1rem 0.5rem;
`;

export const CardList = styled.ul`
  line-height : 1.5rem;
  color : #006FC0;
  margin : 1rem 0 0 1.5rem;
  list-style : disc;

  & li+li{
    margin-top : 1rem;
  }
`;

export const Br = styled.span`
  display : inline-block;
`;

export const Blue = styled.span`
  color : #006FC0;
`;