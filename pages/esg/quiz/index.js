import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../../components/layouts/Header";
import Footer from "../../../components/layouts/Footer";
import { ButtonWrapper, InputWrapper } from "../../../styles/register-post";
import Link from "next/link";
import Banner from "../../../components/layouts/Banner";
import {
  Container,
  Container2,
  Nav,
  NavTitle,
  A,
} from "../../../styles/sidebar-style";
import {
  QuizWrapper,
  CustomNextButton,
  Title,
  Label,
  Quiz,
  Option,
  StyledLabel,
  StyledInput,
  TimerContainer,
  MaskContainer,
  Mask,
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
      },
    ],
  };

  const [selectedOption, setSelectedOption] = useState(""); // 선택한 옵션
  const [userAnswer, setUserAnswer] = useState([]); // 답변
  const [score, setScore] = useState(0); // 점수

  function answerCheck() {
    // 문제 가져오고 정답 처리
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
      startTimer(); // 타이머 초기화
    } else {
      // 마지막 문제일 때
      answerCheck(); // 정답 여부 확인 후 점수 갱신
      setUserAnswer([...userAnswer, selectedOption]); // 사용자 답변 추가
      startTimer();
    }
  }

  const [time, setTime] = useState(30);
  const [progress, setProgress] = useState({});

  const startTimer = () => {
    setTime(30); // 타이머 초기화
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        // 타이머 중지
        clearInterval(timerInterval);
      }
    }, 1000);

    const countdown = ((30 - time) / 30) * 180;
    setProgress({
      transform: `rotate(${countdown}deg)`,
    });
    return () => clearInterval(timerInterval);
  }, [time]); // time 값이 변경될 때마다 실행된다

  return (
    <>
      <Header />
      <Banner />
      <Container>
        <Nav>
          <NavTitle>MENU</NavTitle>
          <Link href="/esg/quiz">
            <A>ESG 퀴즈</A>
          </Link>
          <Link href="/esg/info">
            <A>ESG 개념</A>
          </Link>
          <Link href="/esg/importance">
            <A>ESG 중요성</A>
          </Link>
        </Nav>
        <Container2>
          <div
            style={{
              padding: "20px",
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <QuizWrapper>
              <InputWrapper>
                <Title>ESG 퀴즈</Title>
              </InputWrapper>
              {num <= quiz.list.length - 1 ? (
                <>
                  <Label>
                    문제{num + 1}.<Quiz> {quiz.list[num].question}</Quiz>
                  </Label>
                  <Option>
                    {quiz.list[num].options.map((option, index) => (
                      <StyledLabel
                        key={index}
                        style={{
                          backgroundColor:
                            selectedOption === option ? "orange" : "white",
                          color: selectedOption === option ? "white" : "black",
                          cursor: "pointer",
                        }}
                        onClick={() => setSelectedOption(option)}
                      >
                        {option}
                      </StyledLabel>
                    ))}
                  </Option>
                  <ButtonWrapper>
                    <CustomNextButton onClick={onClickBtn}>
                      다음 퀴즈로 넘어가기
                    </CustomNextButton>
                  </ButtonWrapper>
                </>
              ) : (
                <div>최종 점수는 {score}점입니다!</div>
              )}
            </QuizWrapper>
            <div style={{ marginLeft: "30px" }}>
              <div style={{ marginRight: "20px" }}>
                <strong>풀은 문제:</strong>
                <div
                  style={{
                    marginTop: "10px",
                    width: "100px",
                    height: "10px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    border: "1px solid lightgray",
                  }}
                >
                  <div
                    style={{
                      width: `${(num / quiz.list.length) * 100}%`,
                      height: "100%",
                      backgroundColor: "rgba(252, 168, 47, 1)",
                      borderRadius: "5px",
                    }}
                  ></div>
                  {num}/{quiz.list.length}
                </div>
              </div>

              <TimerContainer>
                <MaskContainer>
                  <Mask style={progress}></Mask>
                </MaskContainer>
                <strong> 남은 시간: {time} 초</strong>
              </TimerContainer>
            </div>
          </div>
        </Container2>
      </Container>
      <Footer />
    </>
  );
}
