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

export default function BoardList(){

  const router = useRouter()

  const [boardList, setBoardList] = useState([{
    id: 0,
    title: '',
    content: '',
}]);


  // 글 리스트의 갯수를 세기 위해 선언, 기본값 0
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
              })
      )
      // 선언된 _inputData 를 최초 선언한 boardList에 concat으로 추가
      setBoardList(boardList.concat(_inputData))
      console.log("게시글 목록 받아오기 성공")
      console.log('받아온 boardList 출력 :: ', boardList[1])
    } catch(e){
      console.error(e.message)
    }
  },[])

  const onClickMoveDetail = (id) => {
    router.push(`/forum/forum-list/${id}`)
    console.log(`/forum/forum-list/${id}`)
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = boardList.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
    <Header />
    <Container>
      <Nav>
        <NavTitle>MENU</NavTitle>
        <A href="#"><IconWrapper>{MenuPath} Questions</IconWrapper></A>
        <A href="#"><IconWrapper>{IconPath} E (Environment)</IconWrapper></A>
        <A href="#"><IconWrapper>{IconPath} S (Social)</IconWrapper></A>
        <A href="#"><IconWrapper>{IconPath} G (Governance)</IconWrapper></A>
        <A href="#"><IconWrapper>{TagPath} Tags</IconWrapper></A>
      </Nav>
    </Container>
    <Container2> 
        {currentPosts.map((board,idx) => (
          <div key={idx}>
          <div>{idx}</div>
          <div>{board.title}</div>
          </div>
        ))}
      
    {/* 게시글 상세보기 링크 띄우고 이동 */}
    {currentPosts?.map((post)=> (
        <div onClick={() => onClickMoveDetail(post.id)} key={post.id}>
        <h4><Link href={`/forum/forum-list/${post.id}`}><a>{post.title}</a></Link></h4>
      </div>
    ))}
    
      <Pagination postsPerPage={postsPerPage} 
      totalPosts={boardList.length} currentPage={currentPage} 
      paginate={paginate}></Pagination>
    </Container2>


    <Footer/>
    </>

  )
};