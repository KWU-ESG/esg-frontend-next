import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
`;

export const Container2 = styled.div`
    padding: 20px;
    flex-grow: 1;
`;

export const Nav = styled.div`
    text-align: start;
    width: 364px;
    height: 100vh;
    font-size: 20px;
    font-weight: 900;
    margin-top: 150px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
`;

export const NavTitle = styled.a`
    color: rgba(128, 128, 128, 1);
    display: flex;
    text-decoration: none;
    width: 310px;
    height: 50px;
    margin: 10px;
    margin-left: 30px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: start;
    justify-content: center;

    &:hover {
        color: rgba(128, 128, 128, 1);
    }
`;

export const MenuPath = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(128,128,128,1)">
        <path id="menupath" d="M21 17.9996V19.9996H3V17.9996H21ZM17.0503 3.5498L22 8.49955L17.0503 13.4493V3.5498ZM12 10.9996V12.9996H3V10.9996H12ZM12 3.99955V5.99955H3V3.99955H12Z"></path>
    </svg>
);

export const IconPath = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(128,128,128,1)">
        <path id="iconpath" d="M10.9042 2.1001L20.8037 3.51431L22.2179 13.4138L13.0255 22.6062C12.6350 22.9967 12.0019 22.9967 11.6113 22.6062L1.71184 12.7067C1.32131 12.3162 1.32131 11.683 1.71184 11.2925L10.9042 2.1001ZM11.6113 4.22142L3.83316 11.9996L12.3184 20.4849L20.0966 12.7067L19.0360 5.28208L11.6113 4.22142ZM13.7327 10.5854C12.9516 9.80433 12.9516 8.538 13.7327 7.75695C14.5137 6.9759 15.78 6.9759 16.5611 7.75695C17.3421 8.538 17.3421 9.80433 16.5611 10.5854C15.78 11.3664 14.5137 11.3664 13.7327 10.5854Z"></path>
    </svg>
);

export const TagPath = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0, 111, 192, 1)">
        <path id="tagpath" d="M10.9042 2.1001L20.8037 3.51431L22.2179 13.4138L13.0255 22.6062C12.6350 22.9967 12.0019 22.9967 11.6113 22.6062L1.71184 12.7067C1.32131 12.3162 1.32131 11.683 1.71184 11.2925L10.9042 2.1001ZM11.6113 4.22142L3.83316 11.9996L12.3184 20.4849L20.0966 12.7067L19.0360 5.28208L11.6113 4.22142ZM13.7327 10.5854C12.9516 9.80433 12.9516 8.538 13.7327 7.75695C14.5137 6.9759 15.78 6.9759 16.5611 7.75695C17.3421 8.538 17.3421 9.80433 16.5611 10.5854C15.78 11.3664 14.5137 11.3664 13.7327 10.5854Z"></path>
    </svg>
);

export const A = styled.a`
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    width: 310px;
    height: 50px;
    margin: 10px;
    margin-left: 30px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;

    &:hover {
        color: rgba(0, 111, 192, 1);
        background-color: rgba(234, 245, 255, 1);
    }

    &:hover svg {
        fill: rgba(0, 111, 192, 1); // 아이콘 색상 변경
    }
`;


export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
  
    &:hover {
        a svg #iconpath, a svg #menupath a svg #tagpath {
            fill: rgba(0, 111, 192, 1);
        }
    }
`;