import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    body {
        margin: 0;
        font-family: 'Raleway', sans-serif;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    .Home {
        position: relative;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(https://d335luupugsy2.cloudfront.net/cms/files/782/1560349756/$aezrduq6qbt);
        background-size: cover;
        background-position: bottom right;
    }
`
