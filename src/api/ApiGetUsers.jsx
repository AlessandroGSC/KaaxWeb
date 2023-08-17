
import React from 'react'
import axios from 'axios';

export const ApiGetUsers = async (config) => {
    try {
        const VITE_API_URL = import.meta.env.VITE_API_URL
        const response = await axios.get(VITE_API_URL + "v1/users", config)
        return response;
    } catch (error) {
        console.log("error en la api",error)
        return {response: null, error: error.message}
    }
}