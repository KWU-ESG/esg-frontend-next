import styled from "@emotion/styled";

export const QuizWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-color: rgba(244, 128, 35, 1);
  color: #fff;
  border-radius: 15px;
`;
export const CustomNextButton = styled(SubmitButton)`
 
  margin-left: 0px;
  margin-top: 25px;
  background-color: rgba(41, 47, 54, 1);
  box-shadow: 20px 10px 20px 0px rgba(192, 192, 192, 0.35);
`;

export const Title = styled.div`
  font-family: Inter;
  font-size: 27px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Quiz = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  font-weight: 500;
  border: 1px solid rgba(234, 234, 234, 1);
  padding: 10px;
  margin-bottom: 20px;
  height: 200px;
  border-radius: 10px;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.05);

  hr {
    border: none;
    border-top: 2px solid rgba(234, 234, 234, 1);
    margin: 10px 0; 
    margin-bottom: 50px;
    width: 100%; 
  }
`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: 510;
  color: rgba(0, 111, 192, 1);
`;

export const Option = styled.div`
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 150px;
  align-items: center;
`;


export const StyledLabel = styled.label`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  font-size: 30px;
  font-weight: 700;
  width: 20px;
  height: 20px;
`;