import { css, DefaultTheme } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  black: '#000000',

  gray100: '#F6F6F6',
  gray200: '#DDDDDD',
  gray300: '#D1D1D1',
  gray400: '#B4B4B4',
  gray500: '#ACACAC',
  gray600: '#9A9A9A',
  gray700: '#666666',
  gray800: '#333333',
  gray900: '#222222',

  red: '#FA4357',
  red50: 'rgba(255, 99, 98, 0.5)',
  coral: '#FF6362',
  gradient: 'linear-gradient(90deg, #FB4458 11.4%, #F06330 89.47%)',
  gradient2:
    'linear-gradient(90deg, rgba(251, 68, 88, 0.90) 2.83%, rgba(240, 99, 48, 0.90) 81.45%)',

  green_1: '#9FCD63',
  green_2: '#408450',
  green_3: '#4CA960',

  blue_1: '#70A8EA',
  yellow: '#FBFF31',
};

const fonts = {
  body_regular_10: css`
    font-family: 'Apple SD Gothic Neo Regular';
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    line-height: 145%; /* 14.5px */
    letter-spacing: -0.005rem;
  `,
  body_semibold_10: css`
    font-family: 'Apple SD Gothic Neo SemiBold';
    font-size: 1rem;
    font-weight: 600;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.005rem;
  `,
  body_regular_12: css`
    font-family: 'Apple SD Gothic Neo Regular';
    font-size: 1.2rem;
    font-weight: 400;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.006rem;
  `,
  body_medium_12: css`
    font-family: 'Apple SD Gothic Neo Medium';
    font-size: 1.2rem;
    font-weight: 500;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.006rem;
  `,
  body_semibold_12: css`
    font-family: 'Apple SD Gothic Neo SemiBold';
    font-size: 1.2rem;
    font-weight: 600;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.006rem;
  `,
  body_regular_13: css`
    font-family: 'Apple SD Gothic Neo Regular';
    font-size: 1.3rem;
    font-weight: 400;
    font-style: normal;
    line-height: 130%;
    letter-spacing: -0.013rem;
  `,
  body_medium_13: css`
    font-family: 'Apple SD Gothic Neo Medium';
    font-size: 1.3rem;
    font-weight: 500;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.0065rem;
  `,
  body_semibold_13: css`
    font-family: 'Apple SD Gothic Neo SemiBold';
    font-size: 1.3rem;
    font-weight: 600;
    font-style: normal;
    line-height: 130%;
    letter-spacing: -0.013rem;
  `,
  body_semibold_14: css`
    font-family: 'Apple SD Gothic Neo SemiBold';
    font-size: 1.4rem;
    font-weight: 600;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.021rem;
  `,
  body_regular_14: css`
    font-family: 'Apple SD Gothic Neo Regular';
    font-size: 1.4rem;
    font-weight: 400;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.007rem;
  `,
  body_bold_14: css`
    font-family: 'Apple SD Gothic Neo Bold';
    font-size: 1.4rem;
    font-weight: 700;
    font-style: normal;
    line-height: 100%; /* 14px */
    letter-spacing: -0.007rem;
  `,
  body_regular_15: css`
    font-family: 'Apple SD Gothic Neo Regular';
    font-size: 1.5rem;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
  `,
  body_medium_15: css`
    font-family: 'Apple SD Gothic Neo Medium';
    font-size: 1.5rem;
    font-weight: 500;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.0075rem;
  `,
  body_semibold_15: css`
    font-family: 'Apple SD Gothic Neo SemiBold';
    font-size: 1.5rem;
    font-weight: 600;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.0075rem;
  `,
  body_bold_15: css`
    font-family: 'Apple SD Gothic Neo Bold';
    font-size: 1.5rem;
    font-weight: 700;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.0075rem;
  `,
  body_regular_16: css`
    font-family: 'Apple SD Gothic Neo Regular';
    font-size: 1.6rem;
    font-weight: 400;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.008rem;
  `,
  body_semibold_16: css`
    font-family: 'Apple SD Gothic Neo SemiBold';
    font-size: 1.6rem;
    font-weight: 600;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.008rem;
  `,
  body_bold_16: css`
    font-family: 'Apple SD Gothic Neo Bold';
    font-size: 1.6rem;
    font-weight: 700;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.008rem;
  `,
  body_semibold_18: css`
    font-family: 'Apple SD Gothic Neo SemiBold';
    font-size: 1.8rem;
    font-weight: 600;
    font-style: normal;
    line-height: 2.4rem;
  `,
  title_regular_18: css`
    font-family: 'Apple SD Gothic Neo Regular';
    font-size: 1.8rem;
    font-weight: 500;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.009rem;
  `,
  title_medium_18: css`
    font-family: 'Apple SD Gothic Neo Medium';
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.009rem;
  `,
  title_semibold_18: css`
    font-family: 'Apple SD Gothic Neo SemiBold';
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: -0.009rem;
  `,
  title_bold_18: css`
    font-family: 'Apple SD Gothic Neo Bold';
    font-size: 1.8rem;
    font-weight: 700;
    font-style: normal;
    line-height: 100%;
    letter-spacing: -0.009rem;
  `,
};

const theme: DefaultTheme = { colors, fonts };

export default theme;
