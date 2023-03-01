import styled from "styled-components";

import colors from "../../global/colors";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.darkGrey};
`

export const Dashboard = styled.div`
    background-color: green;
    width: 50%;
    height: 80%;
`