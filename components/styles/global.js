import { css } from '@emotion/core'

const globalStyle = css`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnika_next.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
    html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    direction: rtl;  
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
  }
  h1,h2 {
    margin: 0;
  }
`
export default globalStyle;