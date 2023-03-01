import React from "react"
import {Route, Routes} from "react-router-dom"

import Login from "../pages/login"
import Home from "../pages/home/index"

const pageRouter: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>

        </Routes>
    )
}

export default pageRouter