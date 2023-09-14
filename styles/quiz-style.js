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
  margin-right: 20px; 
  margin-left: 0px;
  background-color: rgba(41, 47, 54, 1);
`;

// display: flex;
//     flex-direction: row;
//     align-content: center;
//     justify-content: center;
//     align-items: center;

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