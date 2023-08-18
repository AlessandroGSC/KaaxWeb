import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StylesError404 } from "../styles/Error4040Styles";


export const Error404 = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };
    return (
        <div style={StylesError404.content}> 
            <Player
                autoplay
                loop
                src="https://lottie.host/34e6e1c4-9313-48d8-a0d2-abcdf7235420/ymiITeDxly.json"
                style={{ height: '500px', width: '500px' }}
            >
            </Player>
            <br></br>
            <button type="button" className="btn btn-primary" onClick={handleLogin}>Iniciar sesión</button>
        </div>
    )
}