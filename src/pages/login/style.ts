import styled from "styled-components"

import colors from "../../global/colors"

export const Container = styled.div`
    
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.darkPurple};

    & > div {
        height: 60%;
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${colors.lightGrey};
        border-radius: 24px;
        border: 0;

        & > h1 {
            color: ${colors.lightPurple};
        }

        & > form {
            height: 60%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            & > div {
                height: 70%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                & > div {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 20px;
                    
                    & > input {
                        width: 70%;
                        height: 50px;
                        border-radius: 24px;
                        border: 0;
                        outline: none;
                        background-color: ${colors.lightPurple};
                        color: ${colors.darkGrey};
                        padding-left: 15px;
                    }
                }
            }

            & > button {
                width: 175px;
                height: 50px;
                border: 0;
                border-radius: 24px;
                font-weight: bold;
                background-color: ${colors.lightPurple};
                color: ${colors.darkGrey};
                
                :hover {
                    opacity: calc(85%);
                    transition: 250ms;
                    transform: translateY(-5px);
                }
            }
        }
    }
`