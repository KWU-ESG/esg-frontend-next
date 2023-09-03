// 포스트번호로 동적 라우팅
import {useRouter} from 'next/router'
import Link from 'next/link'


export default function PostDetail() {
    const router = useRouter()

    console.log(router)
    return(
        <div>
            <h1>detail page!!</h1>
        </div>
    )
}
