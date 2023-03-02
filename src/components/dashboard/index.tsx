import React from "react"

import { Container, BalanceGraphic, Balance, WalletTreanding, TopTreanding } from "./style"

const Dashboard: React.FC = () => {
    return(
        <Container>
            <div>
                <BalanceGraphic>
                    Balance Graphic
                </BalanceGraphic>
            </div>
        
            <div>
                <Balance>
                    <h5>Balance:</h5>
                    <p>R$100.000.000,00</p>
                </Balance>
                 
            </div>
            <div>
                <WalletTreanding>

                </WalletTreanding>
            </div>

            <div>
                <TopTreanding>

                </TopTreanding>
            </div>
        </Container>
    )
}

export default Dashboard