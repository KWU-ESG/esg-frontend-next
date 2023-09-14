// 포스트번호로 동적 라우팅, 게시글 상세 조회 페이지
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import axios from 'axios'


export default function PostDetail() {
    const router = useRouter()
    const tmp = router.query.post_id
    const id = Number(tmp)
    console.log("라우터 쿼리 아이디 출력: ", id)
  
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')

 
    useEffect(async() => {
        //try 내용 시도하다가 실패하면 아래 내용 모두 무시 후 catch 실행

        try{
            //문자와 변수 한번에 쓰기: template literal
            const res = await axios.get(`https://koreanjson.com/posts/${id}`)
            // 받아온 데이터를 useState 를 이용하여 선언
            setTitle(res.data.title)
            setContent(res.data.content)
            setDate(res.data.createdAt)
            //조회 확인
            console.log(res.data)
        } catch(e) {
            console.log("상세글 조회 에러발생!")
            console.error(e.message)
        }
    },[])

    const onClickDelete = async (event) => {
        // onClick event에서 넘겨진 id 삭제, 삭제는 되는데 백엔드에서 실질적 삭제x
        // 정상적이라면 새로고침 하면 삭제 확인 가능
        console.log("삭제 이벤트 타켓 출력: " , event.target)
        if (window.confirm('게시글을 삭제하시겠습니까?')) {
          await axios.delete(`https://koreanjson.com/posts/${event.target.id}`).then((res) => {
            alert('삭제가 완료되었습니다.');
            router.push(`/forum/forum-list`)
            
          });
        }
      };
 
    return(
        <div>
            <h2>상세보기</h2>
            <div>
                <div>
                    <label for='title'>제목</label>
                    {title && <input type='text' name='title' className='inputTitle' value={title} />}
                    
                </div>
                <div> 
                    <label className='_content' for='content'>내용</label>
                    {content && <textarea name='content' className='inputContent' value={content} />}
                    
                </div>
                <div> 
                    <label className='_content' for='content'>작성날짜</label>
                    {date && <textarea name='content' className='inputContent' value={date} />}
                    
                </div>
                <div>
                    <button type='button' className='editBtn'>edit</button>
                    <button type='button' className='deleteBtn'>delete</button>
                    <span style={{ margin: "10px" }}>
                        {/* id={id}를 안넣으면 화면이 안그려진다 왜?? */}
                     <button id={id} onClick={onClickDelete}>삭제</button>
                    </span>
                </div>
            </div>
        </div>
     )
  }