import styled from 'styled-components'

export const Nav = styled.nav`
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100%;
    max-width: 100%;
    display: flex;

    & img {
        width: 30px;
    }

    .Nav-Container {
        display: flex;
        width: 100%;
        justify-content: space-between; 
        padding: 10px 20px;

        ul {
            list-style: none;
            display: flex;
            li {
                margin: 0 10px;
                a {
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }
`
