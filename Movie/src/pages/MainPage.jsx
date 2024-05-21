import { useRef } from "react";
import styled from "styled-components";
import Welcome from "../components/Main/Welcome";
import SearchBox from "../components/Main/SearchBox";

const Main = () => {
    return (
        <>
            <St.MainPageWrapper>
                <Welcome />
                <SearchBox />
            </St.MainPageWrapper>
        </>
    );
};

export default Main;

const St = {
    MainPageWrapper: styled.div`
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;

        background: #000000;
        width: 100%;
    `
};