import styled from "styled-components";
import { Link } from "react-router-dom"

import * as Icons from "styled-icons/boxicons-regular/index"

import colors from "../global/colors";

export const ContainerMenu = styled.div`
    width: 10%;
    height: 80%;
    background-color: ${colors.darkPurple};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 2px solid;
    border-color: ${colors.darkGrey};
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;

    & > div {
        width: 70px;
        height: 70px;
        border-radius: 8px;
        margin-bottom: 20px;
    }

`

export const TransferIcon = styled(Icons.Transfer)`
    height: 40px;
    width: 40px;
    color: ${colors.lightGrey};
`

export const HomeIcon = styled(Icons.Home)`
    height: 40px;
    width: 40px;
    color: ${colors.lightGrey};
`

export const WalletIcon = styled(Icons.Wallet)`
    height: 40px;
    width: 40px;
    color: ${colors.lightGrey};
`

export const MenuLink = styled(Link)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        opacity: calc(80%);
        border: 1px;
        border-style: solid;
        border-style: 1;
        border-radius: 8px;
        border-color: ${colors.lightGrey};
    }
`