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
    input, select {
        display: block;
        width: 100%;
        height: calc(1.5em + .75rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
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
    .Inscription {
        position: relative;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Form {
        position: relative;

        &_Input {
            position: relative;
            margin: 10px 0;
        }
    }
    .Main-Button {
        cursor: pointer;
        position: relative;
        display: block;
        background-color: #011a33;
        color: #fff;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 16px;
    }
`
