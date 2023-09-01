import styled from "@emotion/styled";

export const Container = styled.div`
    display:flex;
`;

export const Container2 = styled.div`
    padding: '20px';
    flexGrow: 1;
`;
export const Nav = styled.div`
    text-align: start;
    width: 364px;
    height: 100vh;
    font-size:20px;
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
export const A = styled.a`
    color: black;
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
        color: rgba(0, 111, 192, 1);
        background-color: rgba(234, 245, 255, 1);
    }
`;