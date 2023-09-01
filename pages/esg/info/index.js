import {
    Container,
    Nav,
    NavTitle,
    A
  } from "../../../styles/sidebar-style";
import styled from '@emotion/styled'

import {useState} from 'react';
import axios from "axios";
import Header from '../../../components/layouts/Header';
import Footer from '../../../components/layouts/Footer';

const BannerImg = styled.div`
  height : 300px;
  background-image : url('/images/banner.png');
  background-size : cover;
  background-position : center;
  margin-bottom : 50px;
`;

export default function esgInfo(){

    return (
        <>
        <Header/>
        <img src = "/images/banner.png" alt="설명"/>
        <Container>
            <Nav>
            <NavTitle>MENU</NavTitle>
            <A href="#">ESG 퀴즈</A>
            <A href="#">ESG 개념</A>
            <A href="#">ESG 퀴즈</A>
            </Nav>
        </Container>
        <Footer/>
        </>
  
      );
    }
  
  