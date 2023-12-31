import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser() {

    const navigate = useNavigate();
    

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const userDetails = JSON.parse(userString);
        return userDetails;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate('/dashboard');
    }

    const http = axios.create({
        baseURL: "https://localhost:7032",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return {
        http,
        setToken: saveToken,
        getToken,
        token,
        user
    };
}