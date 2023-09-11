import { useRouter } from "next/router";
import { useState } from 'react'
import Header from '../../../components/layouts/Header';
import Footer from '../../../components/layouts/Footer';
import {
    ButtonWrapper,
    Contents,
    InputWrapper,
    Label,
    Subject,
    SubmitButton,
    Title,
    Error,
    CustomSubmitButton
  } from "../../../styles/register-post";

export default function QuizPage(){
    const [num, setNum] = useState(0);    
    const router = useRouter()
    const quiz =  {
        list: [
            {
                id: 0,
                question: "퀴즈임시내용입니다.",
                answer: "X",
            },
            {
                id: 1,
                question: "퀴즈2임시내용입니다.",
                answer: "O",
            },
            {
                id: 2,
                question: "퀴즈3임시내용입니다.",
                answer: "X",
            },
            {
                id: 3,
                question: "퀴즈4임시내용입니다.",
                answer: "X",
            },
            {
                id: 4,
                question: "퀴즈5임시내용입니다.",
                answer: "O",
            },
            {
                id: 5,
                question: "퀴즈6임시내용입니다.",
                answer: "X",
            }
        ]
    }
    function onClickBtn(){
        setNum(num+1)
}


    return (
        <>
        <Header/>
        {/* <div style={{ padding: '20px', flexGrow: 1 }}>
      <InputWrapper>
          <Title>ESG QUIZ</Title>
          
          
        </InputWrapper>

        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 입력하세요"/>
          
       </InputWrapper>

  

     
      </div> */}
      {quiz.list.map((l, idx) => {
            if(num === idx) {
                return <div style={{ padding: '20px', flexGrow: 1 }}>
                    
                    <InputWrapper>
                    <Title>ESG QUIZ</Title>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>{l.question}{num+1}번 문제</Label>
                        <Subject type="text" placeholder={l.answer}/>
                        <ButtonWrapper>
                            <CustomSubmitButton onClick={onClickBtn}>다음단계로</CustomSubmitButton>
                        </ButtonWrapper>
                    </InputWrapper>
                </div>
            }
            else if(num === 6){
                return <div>
                    점수는 _점입니다!
                </div>
            }
  
      })}
      {/* 
        {quiz.list.map((l, idx) => {
            if(num === idx) {
                return <div>
                    {l.question}
                    <span>{num+1}번 문제</span>
                    <button onClick={onClickBtn}>다음단계로</button>
                </div>

            }
            else if(num === 6){
                return <div>
                    점수는 _점입니다!
                </div>
            }
  
      })}
      */}
      <Footer/>
        </>

    )
}