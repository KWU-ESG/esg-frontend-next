import styled from "@emotion/styled";


export const Wrapper = styled.div`
  width: 1000px;
  /* height: 1847px; */
  gap: 20px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Inter;
  font-size: 27px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-bottom: 20px;
`;

export const WriterWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;


export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 5px;
`;

export const InputWrapper = styled.div`
  padding-top: 10px;
`;

export const Subject = styled.input`
  width: 920px;
  height: 40px;
  padding-left: 16px;
  border-radius: 5px;
  border: 2px solid rgba(234, 234, 234, 1);
`;

export const Contents = styled.textarea`
  width: 920px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border-radius: 5px;
  border: 2px solid rgba(234, 234, 234, 1);
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
  margin-left: 70px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
  margin-left: 70px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
  margin-left: 30px;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  padding-top: 80px;
  justify-content: space-between;
  padding-top: 10px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  line-height: 18px;
  letter-spacing: 0.02em;
  font-size: 19px;
  font-weight: 900;
  margin-left: 500px;
  margin-right: 12px;
  background-color: ${(props) => props.isActive ? 'orange' : 'gray' };
  color: #fff;
  border-radius: 15px;
`;

export const CustomSubmitButton = styled(SubmitButton)`
  margin-right: 20px; 
  margin-left: 0px;
  background-color: rgba(22, 130, 253, 1);
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;