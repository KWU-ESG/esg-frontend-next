import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import axios from "axios";
import Link from 'next/link'
import Header from '../../../components/layouts/Header';
import Footer from '../../../components/layouts/Footer';
import Pagination from './pagination';
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
} from "../../../styles/sidebar-style";
import * as S from "../../../styles/forum-list-style";

export default function BoardList(){

  const router = useRouter()

  const [boardList, setBoardList] = useState([{
    //json에서 넘겨주는 변수명을 적어야함
    id: 0,
    title: '',
    content: '',
    createdAt: '' //작성 날짜
}]);


  // 글 리스트의 갯수를 세기 위해 선언, 기본값 0, 10개씩 페이지나누기
  const [lastIdx, setLastIdx] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // await 를 사용하기 위해 async선언
  useEffect(async() => {
    try{
    // 데이터를 받아오는 동안 시간이 소요됨으로 await 로 대기
      const res = await axios.get('https://koreanjson.com/posts')
      // 받아온 데이터로 다음 작업을 진행하기 위해 await 로 대기
      // 받아온 데이터를 map 해주어 rowData 별로 _inputData 선언
      const _inputData = await res.data.map((rowData) => (
              {
                  id: rowData.id,
                  title: rowData.title,
                  content: rowData.content,
                  date: rowData.createdAt

              })
      )
      // 선언된 _inputData 를 최초 선언한 boardList에 concat으로 추가
      setBoardList(boardList.concat(_inputData))
      console.log("게시글 목록 받아오기 성공")
      console.log('받아온 첫번째 boardList 출력 :: ', res.data[0], res.data[1])
    } catch(e){
      console.error(e.message)
    }
  },[])

  const onClickDelete = (event) => {
    // onClick event에서 넘겨진 id 삭제, 삭제는 되는데 백엔드에서 실질적 삭제x
    // 정상적이라면 새로고침 하면 삭제 확인 가능

    if (window.confirm('게시글을 삭제하시겠습니까?')) {
        console.log("삭제할 타겟 확인: ", event.target)
        axios.delete(`https://koreanjson.com/posts/${event.target.id}`).then((res) => {
        alert('삭제가 완료되었습니다.');
        router.push(`/forum/forum-list/`);
      });
    }
  };
 
  // 게시글 id에 따라 동적라우팅 하기 위한 함수
  const onClickMoveDetail = (event) => {
    router.push(`/forum/forum-list/${event.target.id}`);
    console.log(`/forum/forum-list/${event.target.id}`);
  }

  // 백엔드에서 받아오는 날짜 정제 함수
  const getDate = (date) => {
    const _date = new Date(date)
    const yyyy = _date.getFullYear()
    const mm = _date.getMonth() + 1
    const dd = _date.getDate()
    return `${yyyy}-${mm}-${dd}`
  }

  const indexOfLastPost = currentPage * postsPerPage; // 1*10 = 10
  const indexOfFirstPost = indexOfLastPost - postsPerPage + 1; // 10 - 10 + 1 = 1
  const currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost+1); // 1~10까지 슬라이스
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
    <Header />
    {/* <Container>
      <Nav>
        <NavTitle>MENU</NavTitle>
        <A href="#"><IconWrapper>{MenuPath} Questions</IconWrapper></A>
        <A href="#"><IconWrapper>{IconPath} E (Environment)</IconWrapper></A>
        <A href="#"><IconWrapper>{IconPath} S (Social)</IconWrapper></A>
        <A href="#"><IconWrapper>{IconPath} G (Governance)</IconWrapper></A>
        <A href="#"><IconWrapper>{TagPath} Tags</IconWrapper></A>
      </Nav>
    </Container> */}
    <S.Wrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성 날짜</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>삭제</S.ColumnHeaderBasic>
      </S.Row>
      {currentPosts.map((board) => (
        <S.Row key={board.id}> 
            {/* 인라인 요소는 한줄에 출력 */}
              {/* 변수를 넣는거라 style에 이중 중괄호 사용*/}
              <S.ColumnBasic>{board.id}</S.ColumnBasic>
              <S.ColumnTitle id={board.id} onClick={onClickMoveDetail}>{board.title}</S.ColumnTitle>
              <S.ColumnBasic>{getDate(board.date)}</S.ColumnBasic>
              <S.ColumnBasic>
                <button id={board.id} onClick={onClickDelete}>삭제</button>
              </S.ColumnBasic>
          </S.Row>
        ))}
      <S.TableBottom />
    </S.Wrapper>

      
    {/* 게시글 상세보기 링크 그리기 및 이동
    {currentPosts?.map((post)=> (
        <div onClick={() => onClickMoveDetail(post.id)} key={post.id}>
        <h4><Link href={`/forum/forum-list/${post.id}`}><a>{post.title}</a></Link></h4>
      </div>
    ))} */}
    총게시글 개수: {boardList.length} 개

      <Pagination postsPerPage={postsPerPage} 
      totalPosts={boardList.length} currentPage={currentPage} 
      paginate={paginate}></Pagination>
    <Footer/>
    </>

  )
};