import styled from "styled-components";

import colors from "../../global/colors";

export const Container = styled.div`
    width: 50%;
    height: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    background-color: ${colors.darkPurple};

    & > div {
        width: 100%;
        height: 100%;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const BalanceGraphic = styled.div`
            width: 200px;
            height: 200px;
            border: 1 solid;
            border-radius: 50%;
            background-color: black;
`
export const Balance = styled.div`
            width: 100%;
            height: 100%;
            background-color: blue;
`

export const WalletTreanding = styled.div`
            width: 100%;
            height: 100%;
            background-color: green;
`

export const TopTreanding = styled.div`
            width: 100%;
            height: 100%;
            background-color: pink;
`
