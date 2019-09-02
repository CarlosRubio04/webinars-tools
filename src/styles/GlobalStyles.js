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
    img {
        max-width: 100%;
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
        background-image: url(https://d335luupugsy2.cloudfront.net/cms/files/782/1560349756/$aezrduq6qbt);
        background-size: cover;
        background-position: bottom right;

        &-Container {
            width: 500px;
            max-width: 100%;
        }

        &-Header {

            h4 {
                color: #fff;
                text-align: center;
                font-size: 22px;
                font-weight: 100;
                margin-bottom: 0;
            }
            a {
                color: #fff;
                font-size: 12px;
                display: block;
                text-align: center;
                margin-top: 8px;
            }
        }
    }
    .Form {
        position: relative;

        &_Input {
            position: relative;
            margin: 16px 0;
        }
        &_Submit {
            position: relative;
            margin: 24px 0 0 0;
            display: flex;
            justify-content: flex-end;
        }
    }
    .Main-Button {
        cursor: pointer;
        position: relative;
        display: block;
        background-color: #fff;
        border: 2px solid #011a33;
        color: #011a33;
        padding: 8px 24px;
        border-radius: 4px;
        font-size: 22px;
        width: 100%;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
    }
`
