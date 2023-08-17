import React,{useEffect, useState} from "react";
import { Header } from "../components/NavBar";
import { StylesPublicacion } from "../styles/PublicacionStyles";
import Cookies from "js-cookie";
import { GetPublicaciones } from "../api/ApiPublicaciones";

export const Publicaciones = (props) => {
    const [data , setData] = React.useState([]);
    console.log(props,"props en publicaciones")
    return (
        <div>
                <div className="row justify-content-center align-items-center">
                    <div style={StylesPublicacion.spacingTop}>
                        <h1>Publicaciones</h1>
                    </div>
                    <div className="col-12">
                        <table className="table table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">No Cuartos</th>
                                    <th scope="col">Pago</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    );
};