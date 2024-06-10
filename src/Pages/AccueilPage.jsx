import React, { useEffect, useState } from "react";
import LivresService from "../Services/LivreService";
import CardLivre from "../Components/LivreCard";
import "../Styles/Components/CardLivre.css";



const AccueilPage = () => {
    // State
    const [livres, setLivres] = useState ([]);


    // Comportement
    const fetchLivres = async () => {
        
        try {
            const response = await LivresService.getAllLivres();
            setLivres(response.data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }

    let token = localStorage.getItem("token");

    useEffect(() => {
        fetchLivres();
    }, [])


    // Affichage
    return (
        <div className="body">
          <div className="container">
            <div className="row">
              {livres.map((livre, id) => (
                <div key={id} className="col-12 col-md-4 mb-3">
                  <CardLivre livre={livre} id={livre.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );

}

export default AccueilPage