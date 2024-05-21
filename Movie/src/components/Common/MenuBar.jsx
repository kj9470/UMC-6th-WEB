import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const MenuBar = () => {
    const location = useLocation();

    return (
        <>
            <St.MenuBarWrapper>
                <Link to='/'>
                    <St.Logo>UMC Movie</St.Logo>
                </Link>
                <St.Menu>
                    <Link to='/signup-form'>
                        <St.LI>
                            <St.MenuButton
                                className='sign-in'
                                isActive={location.pathname === '/signup-form'}
                            >
                                회원가입
                            </St.MenuButton>
                        </St.LI>
                    </Link>
                    <Link to='/popular'>
                        <St.LI>
                            <St.MenuButton
                                className='popular'
                                isActive={location.pathname === '/popular'}
                            >
                                Popular
                            </St.MenuButton>
                        </St.LI>
                    </Link>
                    <Link to='/now-playing'>
                        <St.LI>
                            <St.MenuButton
                                className='now-playing'
                                isActive={location.pathname === '/now-playing'}
                            >
                                Now Playing
                            </St.MenuButton>
                        </St.LI>
                    </Link>
                    <Link to='/top-rated'>
                        <St.LI>
                            <St.MenuButton
                                className='top-rated'
                                isActive={location.pathname === '/top-rated'}
                            >
                                Top Rated
                            </St.MenuButton>
                        </St.LI>
                    </Link>
                    <Link to='/up-coming'>
                        <St.LI>
                            <St.MenuButton
                                className='upcoming'
                                isActive={location.pathname === '/up-coming'}
                            >
                                Upcoming
                            </St.MenuButton>
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
        position: relative;
    `,

    LI: styled.li`
        display: inline-block;
        margin-right: 2.8rem;
        list-style-type: none;
    `,

    MenuButton: styled.button`
        flex-shrink: 0;
        color: ${({ isActive }) => (isActive ? "#FFD400" : "#FFFFFF")};
        font-size: 17px;
        font-weight: regular;
        background: none;
        border: none;
        cursor: pointer;
        outline: none;

        &:hover {
            color: #FFD400;
        }
    `,

    Logo: styled.div`
        flex-shrink: 0;
        color: #FFFFFF;
        font-size: 30px;
        font-weight: bold;
        margin-left: 30px;
    `,

    Menu: styled.div`
        position: relative;
        margin-left: 330px;
    `,
};
