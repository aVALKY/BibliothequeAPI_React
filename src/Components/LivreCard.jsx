import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Components/CardLivre.css"
import { Card } from "react-bootstrap";
import livreImg from "../Assets/images/livre.png";


const CardLivre = ({livre, id}) => {


    // State
    const  navigate = useNavigate();


    // Comportement


    const redirectTo = () => {
        navigate("/detailspage/"+id)
    }


    // Affichage
    return <>
        <Card className="card-livre" onClick={redirectTo}>
            <Card.Body>
                <Card.Title className="titreCarte">{livre.Titre_Livre}</Card.Title>
                <Card.Img variant="bottom" src={livreImg}/>
            </Card.Body>
        </Card>
    </>
}

export default CardLivre;

