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
    width: 250px;
    height: 52px;
    border: none;
    line-height: 18px;
    letter-spacing: 0.02em;
    font-size: 19px;
    font-weight: 900;
    
    margin-right: 12px;
    color: #fff;
    border-radius: 15px;
    margin-left: 0px;
    margin-top: 25px;
    background-color: rgba(96, 102, 208, 1);
    box-shadow: 20px 10px 20px 0px rgb(0 0 0 / 25%);
}
 
  margin-left: 0px;
  margin-top: 25px;
  background-color: rgba(41, 47, 54, 1);
  box-shadow: 20px 10px 20px 0px rgba(192, 192, 192, 0.35);
`;

export const Title = styled.div`
  text-shadow: -2px -1px 5px rgba(108, 99, 255, 0.47);
  font-family: Inter;
  font-size: 35px;
  color: rgba(96, 102, 208, 1);
  font-weight: 900;
  line-height: 60px;
  letter-spacing: 0.02em;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;


export const Label = styled.div`
  margin-bottom:40px;
  font-size: 25px;
  font-weight: 610;
  color: rgba(96, 102, 208, 1);
  text-shadow: -2px -1px 5px rgba(108, 99, 255, 0.47);
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const Quiz = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-weight:100;
  color:black;
  text-shadow: 0 0 black;

`;

export const Option = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
  gap: 3px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;


export const StyledLabel = styled.label`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  width: 240px;
  border-radius: 30px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.23);

  flex-direction: column;
  align-content: center;
  align-items: center;
  border-color: black;
  background-color: white;
  color: black;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  font-size: 30px;
  font-weight: 700;
  width: 20px;
  height: 20px;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
`;

export const MaskContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #eee;
  margin-bottom: 10px;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color:rgba(252, 168, 47, 1);
  border-radius: 100% 0 0 100% / 50% 0 0 50%;
  transform-origin: 100% 50%;
  transition: transform 1s linear;
`;