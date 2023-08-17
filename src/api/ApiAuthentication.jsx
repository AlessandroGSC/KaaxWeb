
import React from 'react'
import axios from 'axios';
import { config } from 'localforage';


export const ApiAuthentication = async (data) => {
    try {

        const VITE_API_URL = import.meta.env.VITE_API_URL
        const response = await axios.post(VITE_API_URL + "v1/auth/authenticate", data)
        return response;
    } catch (error) {
        console.log("error en la api", error)
        return { response: null, error: error.message }
    }
}