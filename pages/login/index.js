import { useMutation, gql} from '@apollo/client'
import { axios } from 'axios'
import { useState } from 'react';
import { Container, Form } from "react-bootstrap";
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import { BoxStyle, InputStyle, LoginBtn } from '../../styles/form-style'

const mygql = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function LoginPage(){
    //const[함수] = useMutation(mygql)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }
    function onChangePassword(event) {
        setPassword(event.target.value)
    }
    
    //const result = axios.get("")
    const onClickLogin = async () => {
        // const res = await 함수({
        //     variables : {
        //         writer: "채채",
        //         title: "제목",
        //         contents: "테스트"
        //     }
        // })
        // console.log(res)

        //1. 검증하기
        if (email.includes("@") === false){
            setEmailError('이메일에 @가 없습니다.')
        } 
        
        if (email && password) {
        //2. 백엔드에게 전송하기
        const user = {
            email: email,
            username: password
          }
  
          await axios.post("https://koreanjson.com/todos", user);
        //3. 성공 알람 보여주기
        console.log(user.email)
        }

    }


    return (
        <>
        <Header/>

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

        <Form.Group className="mb-4" controlId="formPassword">
        <Form.Label>비밀번호</Form.Label>
        <BoxStyle>
        <InputStyle type="password" placeholder="Enter Your Password"
        onChange={onChangePassword} />
        <i className="fa-solid fa-eye-slash"></i>
        </BoxStyle>
        </Form.Group>

        <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
        </Form>
        </Container>

        <Footer/>
        </>

    )
}