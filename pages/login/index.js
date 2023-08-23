import {EmailBtn,EmailInput} from '../../styles/login-style'

export default function LoginPage(){

    return (
        <div>
            <EmailBtn>이메일:</EmailBtn>
            <EmailInput type="text"/>
            <button>클릭하세요</button>
            <img src="next.svg"/>
        </div>
    )
}