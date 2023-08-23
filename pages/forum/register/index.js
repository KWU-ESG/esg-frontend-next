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
  } from "../../../styles/register-post";

  export default function RegisterPage() {
    return (
      <Wrapper>
        <Title>게시글 등록</Title>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 작성해주세요." />
        </InputWrapper>

        <InputWrapper>
          <Label>내용</Label>
          <Contents placeholder="내용을 작성해주세요." />
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
          <SubmitButton>작성하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    );
  }

