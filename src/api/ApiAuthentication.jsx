
import React from 'react'
import axios from 'axios';


export const ApiAuthentication = async (data) => {
    try {
        const response = await axios.post("https://kaak-api.purpleforest-3ab3d7cd.westus2.azurecontainerapps.io/kaax/api/" + "v1/auth/authenticate", data)
        return response;
    } catch (error) {
        console.log("error en la api",error)
        return {response: null, error: error.message}
    }
}