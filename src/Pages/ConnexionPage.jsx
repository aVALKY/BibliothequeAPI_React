// "rafce" pour template


import React, { useState } from 'react';
import instance from '../api/axios';
import { useNavigate } from 'react-router-dom';


const ConnexionPage = () => {
    // state
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    // comportement
    const login = () => {
        instance.post('/auth/login', {
            email: email,
            password: password
          })

          .then(function (response) {
            localStorage.setItem("token", response.data.token);
            navigate("/");
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    
    // affichage 
  return (
    <div><button onClick={() => {login()}}>Connexion</button>
    <input type="email" name="MyEmail" defaultValue={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email.."/>
    <input type="password" name="MyPassword" defaultValue={password} onChange={(e) => {setPassword(e.target.value)}}  placeholder="Password.."/>
    </div>

  )

}


export default ConnexionPage

