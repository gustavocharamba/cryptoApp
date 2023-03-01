import React from "react"

import { Container, Dashboard } from "./style"
import Menu from "../../components/menu"

const Home: React.FC = () => {
    return(
        <Container>
            <Menu>

            </Menu>
            <Dashboard>
                <div className="balanceContainer">
                    {/* balance and graphic */}
                </div>

                <div className="treadingContainer">
                    <div>
                        {/* top treanding */}
                    </div>

                    <div>
                        {/* wallet top treanding */}
                    </div>
                </div>
            </Dashboard>
        </Container>
    )
}

export default Home