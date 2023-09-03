import {
    ButtonWrapper,
    Contents,
    ImageWrapper,
    InputWrapper,
    Label,
    OptionWrapper,
    RadioButton,
    RadioLabel,
    Subject,
    SubmitButton,
    Title,
    UploadButton,
    Wrapper,
    Error,
    CustomSubmitButton
  } from "../../styles/register-post";

  import {
    Container,
    Container2,
    Nav,
    NavTitle,
    IconWrapper,
    MenuPath,
    IconPath,
    TagPath,
    A
  } from "../../styles/sidebar-style";
  

import {useState} from 'react';
import axios from "axios";
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';



export default function forum(){

    const a = 3; // js 작성 공간


    return (
        <>
        <Header/>
        <Container>
        <Nav>
          <NavTitle>MENU</NavTitle>
          <A href="#"><IconWrapper>{MenuPath} Questions</IconWrapper></A>
          <A href="#"><IconWrapper>{IconPath} E (Environment)</IconWrapper></A>
          <A href="#"><IconWrapper>{IconPath} S (Social)</IconWrapper></A>
          <A href="#"><IconWrapper>{IconPath} G (Governance)</IconWrapper></A>
          <A href="#"><IconWrapper>{TagPath} Tags</IconWrapper></A>
        </Nav>
    
        
        {/*<div style={{ display: 'flex' }}>
          {/* 네비게이션 바 
          <nav style={{ width: '364px', height: '100vh', gap: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff' }}>
            <a href="#">Questions</a>
            <a href="#">E (Environment)</a>
            <a href="#">S (Social)</a>
            <a href="#">G (Governance)</a>
            <a href="#">Tags</a>
          </nav>*/}
        {/*<Wrapper>*/}
        
        <Container2>
        <InputWrapper>
            <Title>여기는 포럼 페이지, 사이드 바 제작중입니다</Title>
            
          </InputWrapper>
  
          <InputWrapper>
            <Label>제목</Label>
            
         </InputWrapper>
  
          <InputWrapper>
            <Label>내용</Label>
            
          </InputWrapper>
  
          <InputWrapper>
            
         </InputWrapper>
  
        <ButtonWrapper>
          <CustomSubmitButton >🖼 이미지 추가</CustomSubmitButton>
          <SubmitButton>🖋 작성하기</SubmitButton>
        </ButtonWrapper>
        </Container2>
        </Container>
        {/*</Wrapper>*/}
        <Footer/>
        </>
  
      );
    }
  
  