import React, { useContext } from "react";
import { StylesNavBar } from "../styles/NavbarrStyles";
import { ImExit } from "react-icons/im";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Header = () => {
    const { LoginData, setIsAuthenticated, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();     
const cerrarSesion = () => {
        setIsAuthenticated(false);
        LoginData({});
        Cookies.remove('userCookie');
        navigate('/login');

}
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid" style={StylesNavBar.navBar}>
                <a className="navbar-brand" href="hossme">Kaax</a>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <ImExit />
                    </button>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-center" id="staticBackdropLabel">Cerrar sesion?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/7801a253-65f4-495d-a308-f41849ee4493/r4ut7AR3rq.json"
                                style={{ height: '120px', width: '120px' }}
                            >
                            </Player>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={cerrarSesion} data-bs-dismiss="modal">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}