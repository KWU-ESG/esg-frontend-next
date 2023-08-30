/* BoardDetail.js */
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import {useParams} from 'react'

const Board = ({ idx, title, contents }) => {
    return (
      <div>
        <h2>{title}</h2>
        <hr />
        <p>{contents}</p>
      </div>
    );
  };

  

export default function BoardDetail () {
  const {idx} = useParams() // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});
  const getBoard = async () => {
    const resp = await axios.get("https://koreanjson.com/posts/${idx}", data);
    setBoard(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Board
          idx={board.idx}
          title={board.title}
          contents={board.contents}
        />
      )}
    </div>
  );
};
