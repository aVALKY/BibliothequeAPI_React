import React, { useState } from 'react'
import instance from '../api/axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



const InscriptionPage = () => {
    // State
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    // Comportement
    const register = () => {
        console.log(prenom, email );
        instance.post('/auth/register', {
            Email_Emprunteur: email,
            Password_Emprunteur : password, 
            Nom_Emprunteur : nom, 
            Prenom_Emprunteur : prenom, 
            Telephone_Emprunteur: telephone
        })

        .then(function (response) {
            navigate("/connexion")
            toast.success(response.data.message);
        })
        .catch(function (error) {
            toast.error(error.message);
        });

    }


    // Affichage
  return (

    <div>
        <h1>Bonjour test</h1>
        <button onClick={() => {register()}}>Inscription</button>
        <input type="email" name="MyEmail" defaultValue={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email.." required="required"/>
        <input type="password" name="MyPassword" defaultValue={password} onChange={(e) => {setPassword(e.target.value)}}  placeholder="Password.." required="required"/>
        <input type="text" name="MyNom" defaultValue={nom} onChange={(e) => {setNom(e.target.value)}}  placeholder="Nom.."/>
        <input type="text" name="MyPrenom" defaultValue={prenom} onChange={(e) => {setPrenom(e.target.value)}}  placeholder="Prenom.."/>
        <input type="tel" name="MyTelephone" defaultValue={telephone} onChange={(e) => {setTelephone(e.target.value)}}  placeholder="Telephone.." required="required"/>

    </div>
    
  )
}

export default InscriptionPage