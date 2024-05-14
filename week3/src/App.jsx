import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import MenuBar from './components/Common/MenuBar';


function App() {
  const setScreenSize = () => {

    // const windowWidth = windowWidth
    // document.documentElement.style.setProperty('--app-max-width', `${windowWidth}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MenuBar />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
