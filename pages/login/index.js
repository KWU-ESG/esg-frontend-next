//import {EmailBtn,EmailInput} from '../../styles/login-style'
import { useRouter } from 'next/router';
import { Container, Form } from "react-bootstrap";
//import BtnLogin from '../../styles/btn-login-style';
import { BoxStyle, InputStyle } from '../../styles/form-style';
import { useState } from 'react';
import axios from "axios";
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';

function Validation(values) {
    const errors = {};

    if (!values.email) {
        errors.email = "이메일을 입력해주세요";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "유효한 이메일 형식이 아닙니다";
    }

    if (!values.password) {
        errors.password = "비밀번호를 입력해주세요";
    } else if (values.password.length < 2) {
        errors.password = "비밀번호는 최소 2글자 이상이어야 합니다";
    }

    return errors;
}


export default function LoginPage(){
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const router = useRouter();

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        console.log('Input changed:', name, value);
        setValues((prev) => ({ ...prev, [name]: value }));
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
    
        console.log('Entered:', values);
        if (!validationErrors.email && !validationErrors.password) {
            try {
                const res = await axios.post('http://localhost:8081/login', values);
                console.log('Got:', res.data);
                if (res.data === "Success") { // backend에서 보낸 Success 확인
                    router.push('/');
                } else {
                    alert("등록된 계정이 없습니다");
                }
            } catch (err) {
                console.log(err);
            }
        }
    } 

    return(
        <>
        <Header />
        <Container className="w-50 my-5 py-5" style={{maxWidth : "600px"}}>
        <Form className="d-flex-column" onSubmit={handleSubmit}>
    
        <Form.Group className="mb-4" controlId="formEmail">
        <Form.Label>이메일 주소</Form.Label>
        <BoxStyle>
        <InputStyle type="email" placeholder="Enter your Email Address" name='email' onChange={handleInput}/>
        </BoxStyle>
        </Form.Group> 
    
        <Form.Group className="mb-4" controlId="formPassword">
        <Form.Label>비밀번호</Form.Label>
        <BoxStyle>
        <InputStyle type="password" placeholder="Enter Your Password" name='password' onChange={handleInput}/>
        <i className="fa-solid fa-eye-slash"></i>
        </BoxStyle>
        </Form.Group>
    
        <button type="submit" className="float-clear">로그인 하기</button>
        </Form>
        </Container>
        <Footer />
        </>
      )
    };
    
    /*
    return (
        <div>
            <EmailBtn>이메일:</EmailBtn>
            <EmailInput type="text"/>
            <button>클릭하세요</button>
            <img src="next.svg"/>
        </div>
    )
}*/