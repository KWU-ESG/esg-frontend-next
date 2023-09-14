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
import { useRouter } from "next/router";

  export default function RegisterPage() {
    const router = useRouter()

    // state와 state를 변경하는 함수 선언
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    // Category state
    const [category, setCategory] = useState(''); 
    // 작성하기 state
    const [isActive, setIsActive] = useState(false);


    // error state
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");
    // 카테고리 에러 처리 기능 추가해야함
    const [categoryError, setCategoryError] = useState("");

    const onChangeTitle = (event) => {
      setTitle(event.target.value);
      // 입력한 값으로 바로 검사
      if (event.target.value && contents && category){
        setIsActive(true)
      }
      if(event.target.value !== ""){
        setTitleError("")
      }
    };

    // 이벤트 핸들러 함수
    const onChangeContents = (event) => {
      setContents(event.target.value);
      if(title && event.target.value && category){
        setIsActive(true)
      }
      if(event.target.value !== ""){
        setContentsError("")
      }
    };

    const onChangeCategory = (event) => {
      setCategory(event.target.value);
      if(title && event.target.value && contents){
        setIsActive(true)
      }
      if(event.target.value !== ""){
        setCategoryError("")
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
        try {
          const postData = {
          id: 10000,
          title: title,
          content: contents,
          createdAt: "2023-02-24T16:17:47.000Z",
          updatedAt: "2023-02-24T16:17:47.000Z",
          UserId : 1234
          }
          // category: category 선택한 카테고리

          console.log({isActive})
          console.log("성공시 제목 출력: ",postData.title)
          await axios.post("https://koreanjson.com/todos", postData);
          alert("게시글이 성공적으로 등록되었습니다.");
          //router.push('/forum/forum-list')
          
        }
        catch(error) {
          console.log("등록 에러 발생")
          console.error(error);
        }

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
          <Error>{categoryError}</Error> 
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

      <ButtonWrapper>
        <CustomSubmitButton onClick={onClickSubmit}>🖼 이미지 추가</CustomSubmitButton>
        <SubmitButton onClick={onClickSubmit} isActive={isActive}>🖋 작성하기</SubmitButton>
      </ButtonWrapper>
      </Wrapper>
      <Footer/>
      </>

    );
  }

