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
  } from "../../../styles/register-post";
import {useState} from 'react';
import axios from "axios";
import Header from '../../../components/layouts/Header';
import Footer from '../../../components/layouts/Footer';

  export default function RegisterPage() {
    // state와 state를 변경하는 함수 선언
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    // Category state
    const [category, setCategory] = useState(''); 

    // error state
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const onChangeTitle = (event) => {
      setTitle(event.target.value);
      if(event.target.value !== ""){
        setTitleError("")
      }
    };

    const onChangeCategory = (event) => {
      setCategory(event.target.value);
    };
  
    // 이벤트 핸들러 함수
    const onChangeContents = (event) => {
      // 내가 선택한 태그의 값
      setContents(event.target.value);
      if(event.target.value !== ""){
        setContentsError("")
      }
    };

    const onClickSubmit = async () => {
      // 타이틀이 비었을 때 (없을 때)
      if (!title) {
        setTitleError("제목을 입력해주세요.");
      }
      if (!contents) {
        setContentsError("내용을 입력해주세요.");
      }
      if (title && contents) {
        const postData = {
          title: title,
          content: contents
          // category: category 선택한 카테고리
        }

        await axios.post("https://koreanjson.com/todos", postData);
        alert(postData.title)
        alert(postData.content)
        alert("게시글이 등록되었습니다.");
      }
    };

    return (
      <>
            <Header/>
      <Wrapper>
      <InputWrapper>
          <Title>게시글 등록</Title>
          <select
            value={category}
            onChange={onChangeCategory}
            style={{
              width: '920px',
              color: 'rgba(128, 128, 128, 1)',
              height: '40px',
              paddingLeft: '16px',
              borderRadius: '5px',
              border: '2px solid rgba(234, 234, 234, 1)'
            }}>
            <option value="">카테고리 선택 (E, S, G, 기타 선택)</option>
            <option value="E">E</option>
            <option value="S">S</option>
            <option value="G">G</option>
            <option value="기타">기타</option>
          </select>
          <Error>{titleError}</Error>
        </InputWrapper>

        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 입력하세요" onChange={onChangeTitle}/>
          <Error>{titleError}</Error>
       </InputWrapper>

        <InputWrapper>
          <Label>내용</Label>
          <Contents placeholder="질문 혹은 나누고 싶은 게시글 내용을 입력하세요" onChange={onChangeContents}/>
          <Error>{contentsError}</Error>
        </InputWrapper>

        <InputWrapper>
          <Subject type="text" placeholder="태그를 입력하세요" onChange={onChangeTitle}/>
          <Error>{titleError}</Error>
       </InputWrapper>

       {/*

        <ImageWrapper>
          <Label>이미지 추가</Label>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
        </ImageWrapper>

        <OptionWrapper>
          <Label>태그선택</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">E</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">S</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">G</RadioLabel>
        </OptionWrapper>

          */}

      <ButtonWrapper>
        <CustomSubmitButton onClick={onClickSubmit}>🖼 이미지 추가</CustomSubmitButton>
        <SubmitButton onClick={onClickSubmit}>🖋 작성하기</SubmitButton>
      </ButtonWrapper>
      </Wrapper>
      <Footer/>
      </>

    );
  }

