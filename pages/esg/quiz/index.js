import { useRouter } from "next/router";
import { useState } from 'react'
import Header from '../../../components/layouts/Header';
import Footer from '../../../components/layouts/Footer';
import {
  ButtonWrapper,
  InputWrapper,
} from "../../../styles/register-post";


import {
  QuizWrapper,
  CustomNextButton,
  Title,
  Quiz,
  Label,
  Option,
  StyledLabel,
  StyledInput
} from "../../../styles/quiz-style";

export default function QuizPage() {
  const [num, setNum] = useState(0);
  const router = useRouter();
  const quiz = {
    list: [
      {
        id: 0,
        question: "ESG에서, E는 환경을 의미한다.",
        options: ["O", "X"],
        answer: "O",
      },
      {
        id: 1,
        question: "랄라리 랄라 셩이다.",
        options: ["O", "X"],
        answer: "O",
      },
      {
        id: 2,
        question: "우리네 인생은 ?",
        options: ["O", "X"],
        answer: "X",
      },
      {
        id: 3,
        question: "삼귀자",
        options: ["O", "X"],
        answer: "X",
      },
      {
        id: 4,
        question: "사랑해 널 사랑해",
        options: ["O", "X"],
        answer: "O",
      },
      {
        id: 5,
        question: "오다리란 ? ",
        options: ["O", "X"],
        answer: "X",
      }
    ]
  };

  const [selectedOption, setSelectedOption] = useState(""); // 선택한 옵션
  const [userAnswer, setUserAnswer] = useState([]); // 답변
  const [score, setScore] = useState(0); // 점수

  function answerCheck() { // 문제 가져오고 정답 처리
    const question = quiz.list[num]; 
    if (question.answer === selectedOption) {
      setScore(score + 1); 
    }
  }

  function onClickBtn() {
    if (num <= quiz.list.length - 1) {
      answerCheck(); // 점수 갱신
      setUserAnswer([...userAnswer, selectedOption]); // 사용자 답변 추가
      setNum(num + 1); // 다음 문제로 이동
      setSelectedOption(""); // 옵션 초기화 상태로 갱신
    } else {
      // 마지막 문제일 때
      answerCheck(); // 정답 여부 확인 후 점수 갱신
      setUserAnswer([...userAnswer, selectedOption]); // 사용자 답변 추가
    }
  }
  return (
    <>
    <Header/>
    <div style={{ padding: '20px', flexGrow: 1 }}>
        <InputWrapper><Title>ESG QUIZ</Title></InputWrapper>
        <QuizWrapper>
        {num <= quiz.list.length - 1 ? (
            <>
                
                <Quiz>
                  <Label>Quiz #{num + 1}</Label>
                  <hr /> 
                  {quiz.list[num].question}
                </Quiz>
                <Option>
                {quiz.list[num].options.map((option, index) => (
                  <StyledLabel key={index}>
                    <StyledInput
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => setSelectedOption(option)}
                    />
                    {option}
                  </StyledLabel>
                ))}
              </Option>
              <ButtonWrapper><CustomNextButton onClick={onClickBtn}>다음단계로</CustomNextButton></ButtonWrapper>
              </>
             ) : (
                <div>최종 점수는 {score}점입니다!</div>
             )}

        </QuizWrapper>
    </div>
    <Footer />
    </>
  );
}