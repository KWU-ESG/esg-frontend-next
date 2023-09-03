// 포스트번호로 동적 라우팅, 게시글 상세 조회 페이지
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import axios from 'axios'


export default function PostDetail() {
    const router = useRouter()
    const tmp = router.query

    const id = Object.values(tmp)
    console.log("라우터 쿼리 아이디 출력: ", Number(id))
  
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')

 
    useEffect(async() => {
        try{
            const res = await axios.get(`https://koreanjson.com/posts/${id}`)
            // 받아온 데이터를 useState 를 이용하여 선언
            setTitle(res.data.title)
            setContent(res.data.content)
            setDate(res.data.createdAt)
            //조회 확인
            console.log(res.data)
        } catch(e) {
            console.error(e.message)
        }
    },[])
 
    return(
        <div>
            <h2>상세보기</h2>
            <div>
                <div>
                    <label for='title'>제목</label>
                    <input type='text' name='title' className='inputTitle' value={title} />
                </div>
                <div> 
                    <label className='_content' for='content'>내용</label>
                    <textarea name='content' className='inputContent' value={content} />
                </div>
                <div> 
                    <label className='_content' for='content'>작성날짜</label>
                    <textarea name='content' className='inputContent' value={date} />
                </div>
                <div>
                    <button type='button' className='editBtn'>edit</button>
                    <button type='button' className='deleteBtn'>delete</button>
                </div>
            </div>
        </div>
     )
  }