// import classNames from "classnames/bind"
// // import styles from './Item.module.css'
import styled, {css} from 'styled-components'

//可以复用的模块
const withStrongAfter = css`
opacity: 1;

::after {
    width: 24px;
}
`

const Item = styled.a`
    padding: 16px;
    text-decoration: none;
    color: #49515d;
    font-size: 15px;
    opacity: 0.6;
    display: block;
    transition: opacity 0.3s ease-in-out;

    ::after{
        content: "";
    width: 0;
    border-bottom: 3px solid #377e9a;
    margin: auto;
    margin-top: 4px;
    display: block;
    transition: width 0.3s ease-in-out;
    }

    /* :hover{
        opacity: 1;
    }
    :hover::after {
        width: 24px;
    } */
    :last-of-type {
        padding-right: 0;
    }
    :hover{
        ${withStrongAfter}
    }

    ${(props) => props.active && withStrongAfter}
`

export default Item;