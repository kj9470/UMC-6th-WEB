import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none; 
`;

const MenuBar = () => {
    const location = useLocation();

    return (
        <>
            <St.MenuBarWrapper>
                <StyledLink to='/'>
                    <St.Logo>UMC Movie</St.Logo>
                </StyledLink>
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
                    <Link to='/sign-in'>
                        <St.LI>
                            <St.MenuButton
                                className='sign-in'
                                isActive={location.pathname === '/sign-in'}
                            >
                                로그인
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
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 15px 30px;
        background: #1d1d42;
        position: relative;
    `,

    LI: styled.li`
        display: inline-block;
        list-style-type: none;
        margin-left: 35px;
        &:last-child {
            margin-right: 0;
        }
    `,

    MenuButton: styled.button`
        flex-shrink: 0;
        color: ${({ isActive }) => (isActive ? "#FFD400" : "#FFFFFF")};
        font-size: 17px;
        font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
        transition: color 0.3s, font-weight 0.3s;

        &:hover {
            color: #FFD400;
        }
    `,

    Logo: styled.div`
        flex-shrink: 0;
        color: #FFFFFF;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
    `,

    Menu: styled.div`
        display: flex;
        align-items: center;
    `,
};
