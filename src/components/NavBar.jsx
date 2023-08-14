import React from "react";
import { StylesNavBar } from "../styles/NavbarrStyles";
import { ImExit } from "react-icons/im";

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid" style={StylesNavBar.navBar}>
                <a className="navbar-brand" href="hossme">Kaax</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={StylesNavBar.items}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="publicaciones">Publicaciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/usuarios">Usuarios</a>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <ImExit />
                    </button>
                </div>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-center" id="staticBackdropLabel">Cerrar sesion?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}