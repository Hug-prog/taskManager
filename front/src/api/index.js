import axios from "axios";
import React from "react";
//process.env.REACT_APP_CONNEXION_URL
export const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
  },
});
