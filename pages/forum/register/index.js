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
    Error
  } from "../../../styles/register-post";
import {useState} from 'react';
import axios from "axios";
import Header from '../../../components/layouts/Header';
import Footer from '../../../components/layouts/Footer';

  export default function RegisterPage() {
    // state와 state를 변경하는 함수 선언
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    // error state
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const onChangeTitle = (event) => {
      setTitle(event.target.value);
      if(event.target.value !== ""){
        setTitleError("")
      }
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
        <Title>게시글 등록</Title>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle}/>
          <Error>{titleError}</Error>
       </InputWrapper>

        <InputWrapper>
          <Label>내용</Label>
          <Contents placeholder="내용을 작성해주세요." onChange={onChangeContents}/>
          <Error>{contentsError}</Error>
        </InputWrapper>

        <ImageWrapper>
          <Label>사진첨부</Label>
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

        <ButtonWrapper>
          <SubmitButton onClick={onClickSubmit}>작성하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
      <Footer/>
      </>

    );
  }

