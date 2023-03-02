import React from "react"

import { Container } from "./style"
import Menu from "../../components/menu"
import Dashboard from "../../components/dashboard/index"

const Home: React.FC = () => {
    return(
        <Container>
            <Menu/>
            <Dashboard/>
        </Container>
    )
}

export default Home