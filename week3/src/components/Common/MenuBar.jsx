import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuBar = () => {
    return (
        <>
            <St.MenuBarWrapper>
                <St.Logo>UMC Movie</St.Logo>
                <St.Menu>
                    <Link to='/sign-in'>
                        <St.LI>
                            <St.MenuButton className='sign-in' >회원가입</St.MenuButton>
                        </St.LI>
                    </Link>
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

        background: #111111;
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
        color: #008080;
        font-size: 17px;
        font-weight: regular;
    `,

    Logo: styled.div`
        color: #008080;
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