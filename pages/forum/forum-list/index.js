import {useEffect, useState} from 'react';
import axios from "axios";

export default function BoardList(){
  const [boardList, setBoardList] = useState([]);

  const getBoardList = async () => {
    const resp = await axios.get("https://koreanjson.com/posts", data);
    // 2) 게시글 목록 데이터에 할당  
    setBoardList(resp.data); // 3) boardList 변수에 할당
    console.log(resp.data);
  }

  useEffect(() => {
    getBoardList(); // 1) 게시글 목록 조회 함수 호출
  }, []);

  return (
    <div>
      <ul>
        {boardList.map((board, idx) => (
          // 4) map 함수로 데이터 출력
          <li key={board.idx}>
            <Link to={`/forum/${board.idx}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};