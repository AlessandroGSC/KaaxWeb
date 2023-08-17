
import React from 'react'
import axios from 'axios';

export const ApiGetpostulaciones = async (config) => {
    try {
        const response = await axios.get("https://kaak-api.purpleforest-3ab3d7cd.westus2.azurecontainerapps.io/kaax/api/" + "postulaciones", config)
        return response;
    } catch (error) {
        console.log("error en la api",error)
        return {response: null, error: error.message}
    }
}