import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LivreService from '../Services/LivreService';
import "../Styles/Pages/DetailsPage.css"
import { jwtDecode } from 'jwt-decode';
import { dateNow, threeDayAfterDateNow } from '../utils/Date';
import instance from '../api/axios';




const DetailsPage = () => {

    // State
    const { id } = useParams()
    const [livre, setLivre] = useState({})
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const utilsDateEmprunt = dateNow();
    const utilsDateRetour = threeDayAfterDateNow();
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };



    // Comportement
    const fetchLivre = async () => {
        try {
            const responseCard = await LivreService.getLivreById(id);
            setLivre(responseCard.data);
        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        fetchLivre();
    }, [])


    const handleClick = () => {
        instance.post("/emprunts", {
            Date_Emprunt :  utilsDateEmprunt,
            Livre_Emprunt : livre.id,
            Emprunteur_Emprunt : decoded.id,
            Date_Emprunt_Rendu : utilsDateRetour
        } , config )
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        });

    };
    //Affichage


  return (
    <div>
        <h1>DetailsPage {id}</h1>
        <div className='contentLivre'>
            <h2>{livre.Titre_Livre}</h2>
            <h2>{livre.Description_Livre}</h2>
            <h2>{livre.Date_Livre}</h2>
            <button className='emprunterLivre' onClick={handleClick}>Emprunter le livre</button>
        </div>

    </div>
  )

}

export default DetailsPage;