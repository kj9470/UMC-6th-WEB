import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuBar = () => {

    const [buttonText, setButtonText] = useState("로그인");
    const [buttonColor, setButtonColor] = useState("#FFFFFF");

    const signInButtonClick = () => {
        if (buttonText === "로그인") {
            setButtonText("로그아웃");
            setButtonColor("#FFD400");
        } else {
            setButtonText("로그인");
            setButtonColor("#FFFFFF")
        }
    }

    return (
        <>
            <St.MenuBarWrapper>
                <Link to='/'>
                    <St.Logo>UMC Movie</St.Logo>
                </Link>
                <St.Menu>
                    <St.LI>
                        <St.MenuButton className='sign-in' onClick={signInButtonClick} style={{ color: buttonColor }}>
                            {buttonText}
                        </St.MenuButton>
                    </St.LI>
                    <Link to='/popular'>
                        <St.LI>
                            <St.MenuButton className='popular'>Popular</St.MenuButton>
                        </St.LI>
                    </Link>
                    <Link to='/now-playing'>
                        <St.LI>
                            <St.MenuButton className='now-playing'>Now Playing</St.MenuButton>
                        </St.LI>
                    </Link>
                    <Link to='/top-rated'>
                        <St.LI>
                            <St.MenuButton className='top-rated'>Top Rated</St.MenuButton>
                        </St.LI>
                    </Link>
                    <Link to='/up-coming'>
                        <St.LI>
                            <St.MenuButton className='upcoming'>Upcoming</St.MenuButton>
                        </St.LI>
                    </Link>
                </St.Menu>
            </St.MenuBarWrapper>
        </>
    );
};

export default MenuBar;

const St = {
    MenuBarWrapper: styled.div`
        display: flex;
        scrollbar-width: none;

        overflow-x: auto;
        flex-shrink: 0;

        width: 100%;
        padding: 15px 0;
        white-space: nowrap;

        background: #28284b;
        margin: 0 auto;
        position: relative;

        justify-content: center; 
    `,

    LI: styled.li`
        display: inline-block;
        margin-right: 2.8rem;
        list-style-type: none;
    `,

    MenuButton: styled.button`
        flex-shrink: 0;
        color: #FFFFFF;
        font-size: 17px;
        font-weight: regular;
    `,

    Logo: styled.div`
        flex-shrink: 0;
        color: #FFFFFF;
        margin-left: 1.8rem;
        font-size: 30px;
        font-weight: bold;
    `,

    Menu: styled.div`
        position: relative;
        justify-content: flex-end;
        margin: 0 auto;
    `,
}