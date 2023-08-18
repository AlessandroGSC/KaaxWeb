
import React from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

export const GetPublicaciones = async (config) => {
    try {
        
        let config = {
            method: 'get',
            url: import.meta.env.VITE_API_URL + 'v1/publicaciones',
            headers: { 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb3JnZTIyQGdtYWlsLmNvbSIsImlhdCI6MTY5MjMwNzU0NiwiZXhwIjoxNjkyMzkzOTQ2fQ.fNLFVKNQowlRFrPuEi0bRl0qTFTL8L-64CYmGsqX0UY'
            }
        };
      
      return await axios.request(config)
    } catch (error) {
        console.log("error en la api",error)
        return {response: null, error: error.message}
    }
}