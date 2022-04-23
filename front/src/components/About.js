import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Api from "../api";

import Header from "./Header";

function About() {
    const navigate = useNavigate();
    const params = useParams();


    return (
        <>
            <Header />
            About...
        </>
    )
}

export default About;