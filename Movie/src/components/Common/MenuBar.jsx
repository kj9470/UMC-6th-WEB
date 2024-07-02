import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none; 
`;

const MenuBar = () => {
    const location = useLocation();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            <St.MenuBarWrapper>
                <StyledLink to='/'>
                    <St.Logo>UMC Movie</St.Logo>
                </StyledLink>
                <St.MenuIcon onClick={toggleSidebar}>
                    ☰
                </St.MenuIcon>
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
            <St.Sidebar isOpen={isSidebarOpen}>
                <St.SidebarMenu>
                    <Link to='/signup-form' onClick={closeSidebar}>
                        <St.SidebarMenuItem isActive={location.pathname === '/signup-form'}>
                            회원가입
                        </St.SidebarMenuItem>
                    </Link>
                    <Link to='/sign-in' onClick={closeSidebar}>
                        <St.SidebarMenuItem isActive={location.pathname === '/sign-in'}>
                            로그인
                        </St.SidebarMenuItem>
                    </Link>
                    <Link to='/popular' onClick={closeSidebar}>
                        <St.SidebarMenuItem isActive={location.pathname === '/popular'}>
                            Popular
                        </St.SidebarMenuItem>
                    </Link>
                    <Link to='/now-playing' onClick={closeSidebar}>
                        <St.SidebarMenuItem isActive={location.pathname === '/now-playing'}>
                            Now Playing
                        </St.SidebarMenuItem>
                    </Link>
                    <Link to='/top-rated' onClick={closeSidebar}>
                        <St.SidebarMenuItem isActive={location.pathname === '/top-rated'}>
                            Top Rated
                        </St.SidebarMenuItem>
                    </Link>
                    <Link to='/up-coming' onClick={closeSidebar}>
                        <St.SidebarMenuItem isActive={location.pathname === '/up-coming'}>
                            Upcoming
                        </St.SidebarMenuItem>
                    </Link>
                </St.SidebarMenu>
            </St.Sidebar>
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

        @media (max-width: 768px) {
            padding: 15px 20px;
        }
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

        @media (max-width: 768px) {
            display: none;
        }
    `,

    MenuIcon: styled.div`
        display: none;
        font-size: 24px;
        cursor: pointer;
        color: white;

        @media (max-width: 768px) {
            display: block;
        }
    `,

    Sidebar: styled.div`
        position: fixed;
        top: 0;
        right: 0;
        width: 250px;
        height: 100%;
        background: #1d1d42;
        transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
        transition: transform 0.3s ease-in-out;
        z-index: 1000;

        @media (min-width: 769px) {
            display: none;
        }
    `,

    SidebarMenu: styled.ul`
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
    `,

    SidebarMenuItem: styled.li`
        padding: 15px 0;
        color: ${({ isActive }) => (isActive ? "#FFD400" : "#FFFFFF")};
        font-size: 18px;
        font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
        cursor: pointer;

        &:hover {
            color: #FFD400;
        }
    `
};
