import React from "react"
import { Link } from "react-router-dom"
import { ContainerMenu, MenuLink, HomeIcon, WalletIcon, TransferIcon } from "./menuStyled"

const Menu: React.FC = () => {
    return(
        <ContainerMenu>
            <div>
                <MenuLink to="/home"><HomeIcon></HomeIcon></MenuLink>
            </div>
            <div>
                <MenuLink to="/wallet"><WalletIcon></WalletIcon></MenuLink>
            </div>
            <div>
                <MenuLink to="/trade"><TransferIcon></TransferIcon></MenuLink>
            </div>
        </ContainerMenu>
    )
}

export default Menu