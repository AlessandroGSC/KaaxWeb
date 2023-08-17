
import React from 'react'
import axios from 'axios';

export const ApiGetpostulaciones = async (config) => {
    try {
        const response = await axios.get("http://192.168.0.26:8081/kaax/api/" + "postulaciones", config)
        return response;
    } catch (error) {
        console.log("error en la api",error)
        return {response: null, error: error.message}
    }
}