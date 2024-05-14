import { useRef } from "react";
import styled from "styled-components";

const Main = () => {
    return (
        <St.MainPageWrapper>
        </St.MainPageWrapper>
    );
};

export default Main;

const St = {
    MainPageWrapper: styled.div`
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;

        background: #123456;
        width: 100%;
    `
};