import styled from '@emotion/styled'

// 입력 form 스타일
export const BoxStyle = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
  border-radius :30px;
  border : 1px solid #0094FF;
  padding : 15px 30px;
`;

export const InputStyle = styled.input`
  width : 100%;
  border : none;

  &:focus{
    outline : none;
  }
`;
