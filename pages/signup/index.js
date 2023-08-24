import { Container, Form } from "react-bootstrap";
import BtnLogin from '../../styles/btn-login-style'
import { BoxStyle, InputStyle } from '../../styles/form-style'
import axios from "axios";
import { useState } from 'react';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';

// 회원가입 선택 시
export default function SignUpPage(props){

    const [email, setEmail] = useState("")
    const [birth, setBirth] = useState("");
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    
    const [emailError, setEmailError] = useState("")

    function onChangeEmail(event) {
        console.log(event) //내 행동
        console.log(event.target) //작동된 태그
        console.log(event.target.value) //작동된 태그의 입력된 값

        setEmail(event.target.value)
    }

    function onChangePwd(event) {
        setPassword(event.target.value)
    }

    function onClickSignup(event) {
        console.log(email)
        console.log(password)

        //1. 검증하기
        if (email.includes("@") === false){
            setEmailError('이메일에 @가 없습니다.')
        } else {
        //2. 백엔드에게 전송하기

        //3. 성공 알람 보여주기
        alert("회원가입이 되었습니다.")
        }

    }

  // 입력한 값을 post로 전송함
  // jsonplaceholder에 전송 성공까지만 확인됨
  
  /**
 * < SignIn >
 * Form.Group ( 이메일, 이름, 비밀번호, 비밀번호 확인 )
 */
  return(
    <>
    <Header />
    <Container className="w-50 my-5 py-5" style={{maxWidth : "600px"}}>
    <Form className="d-flex-column">

    <Form.Group className="mb-4" controlId="formEmail">
    <Form.Label>이메일 주소</Form.Label>
    <BoxStyle>
    <InputStyle type="email" placeholder="Enter your Email Address" 
    onChange={onChangeEmail}/>
    <div>{emailError}</div>
    {/* <div id = 'myerror'></div>  옛날 방식 */}
    </BoxStyle>
    </Form.Group> 

    <Form.Group className="mb-4" controlId="formUserName">
    <Form.Label>생년월일</Form.Label>
    <BoxStyle>
    <InputStyle type="text" placeholder="생년월일을 입력하세요" />
    </BoxStyle>
    </Form.Group>

    <Form.Group className="mb-4" controlId="formUserName">
    <Form.Label>사용자 이름</Form.Label>
    <BoxStyle>
    <InputStyle type="text" placeholder="Enter your User Name" />
    </BoxStyle>
    </Form.Group>

    <Form.Group className="mb-4" controlId="formUserName">
    <Form.Label>사용할 닉네임</Form.Label>
    <BoxStyle>
    <InputStyle type="text" placeholder="닉네임을 입력하세요" />
    </BoxStyle>
    </Form.Group>

    <Form.Group className="mb-4" controlId="formPassword">
    <Form.Label>비밀번호</Form.Label>
    <BoxStyle>
    <InputStyle type="password" placeholder="Enter Your Password"/>
    <i className="fa-solid fa-eye-slash"></i>
    </BoxStyle>
    </Form.Group>

    <Form.Group className="mb-4" controlId="formPasswordCheck">
    <Form.Label>비밀번호 확인</Form.Label>
    <BoxStyle>
    <InputStyle type="password" placeholder="Enter Your Password"/>
    <i className="fa-solid fa-eye-slash"></i>
    </BoxStyle>
    </Form.Group>
    <button onclick={onClickSignup}>가입하기</button>
    </Form>
    </Container>
    <Footer />
    </>
  )
};
