import styled from 'styled-components'

export const Counter = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    & h4 {
        text-align:center;
        color: #fff;
    }

    & img {
        width: 500px;
    }

    .Counter-container {
        position: relative;
        display: flex;
        justify-content: center;
        color: #fff;
        font-size: 50px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        .item {
            padding: 5px;
        }
    }
    
`
