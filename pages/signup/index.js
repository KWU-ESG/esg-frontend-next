import { Container, Form } from "react-bootstrap";
//import BtnLogin from '../../styles/btn-login-style';
import { BoxStyle, InputStyle } from "../../styles/form-style";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";

export default function SignUpPage(props) {
  const [values, setValues] = useState({
    email: "",
    name: "",
    birth: "",
    nickname: "",
    password1: "",
    password2: "",
    like: "E",
  });

  const router = useRouter();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateInput = (values) => {
    const errors = {};

    if (values.name.trim() === "") {
      errors.name = "Name should not be empty";
    }

    if (values.nickname.trim() === "") {
      errors.nickname = "Nickname should not be empty";
    }

    if (values.email.trim() === "") {
      errors.email = "Email should not be empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Email format is incorrect";
    }

    if (values.password1 === "") {
      errors.password1 = "Password should not be empty";
    } else if (values.password1.length < 2) {
      errors.password1 = "Password should be at least 2 characters long";
    }

    if (values.password1 !== values.password2) {
      errors.password2 = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("1차 입력 값 출력: ", values); // 입력된 데이터를 로그로 출력

    const validationErrors = validateInput(values);

    if (values.password1 !== values.password2) {
      validationErrors.password2 = "패스워드가 일치하지 않습니다";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // 서버로 데이터 전송
    const dataToSend = {
      name: values.name,
      nickname: values.nickname,
      birth: values.birth,
      email: values.email,
      password: values.password1,
      like: values.like,
    };

    axios
      .post("/user/create", dataToSend)
      .then((res) => {
        console.log("서버로 회원가입 성공!");
        console.log(res.data, dataToSend);
        router.push("/");
      })
      .catch((err) => {
        console.log("서버로 회원가입 post 실패..");
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <Container className="w-50 my-5 py-5" style={{ maxWidth: "600px" }}>
        <Form className="d-flex-column" onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Label>이메일 주소</Form.Label>
            <BoxStyle>
              <InputStyle
                type="email"
                placeholder="Enter your Email Address"
                name="email"
                onChange={handleInput}
              />
              {/*<div>{emailError}</div>*/}
              {/* <div id = 'myerror'></div>  옛날 방식 */}
            </BoxStyle>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formUserName">
            <Form.Label>생년월일</Form.Label>
            <BoxStyle>
              <InputStyle
                type="text"
                placeholder="생년월일을 입력하세요"
                name="birth"
                onChange={handleInput}
              />
            </BoxStyle>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formUserName">
            <Form.Label>사용자 이름</Form.Label>
            <BoxStyle>
              <InputStyle
                type="text"
                placeholder="Enter your User Name"
                name="name"
                onChange={handleInput}
              />
            </BoxStyle>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formUserName">
            <Form.Label>사용할 닉네임</Form.Label>
            <BoxStyle>
              <InputStyle
                type="text"
                placeholder="닉네임을 입력하세요"
                name="nickname"
                onChange={handleInput}
              />
            </BoxStyle>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label>비밀번호</Form.Label>
            <BoxStyle>
              <InputStyle
                type="password"
                placeholder="Enter Your Password"
                name="password1"
                onChange={handleInput}
              />
              <i className="fa-solid fa-eye-slash"></i>
            </BoxStyle>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPasswordCheck">
            <Form.Label>비밀번호 확인</Form.Label>
            <BoxStyle>
              <InputStyle
                type="password"
                placeholder="Enter Your Password"
                name="password2"
                onChange={handleInput}
              />
              <i className="fa-solid fa-eye-slash"></i>
            </BoxStyle>
          </Form.Group>
          <button type="submit" className="float-clear">
            가입하기
          </button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
