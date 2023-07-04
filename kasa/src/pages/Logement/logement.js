import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';    // useParams (pour obtenir les paramètres de l'URL) et Navigate (pour naviguer vers d'autres pages).
import './Logement.css';
import Carousel from '../../components/Carousel/Carousel';
import Description from '../../components/Description/Description';
import HostInfo from '../../components/HostInfo/HostInfo';
import Item from '../../components/Item/Item';

const Logement = () => {
  const { id } = useParams(); //  useParams pour obtenir les paramètres de l'URL. Il extrait l'ID du logement de ces paramètres.
  const [logementData, setLogementData] = useState(null);  // useState pour gérer l'état du logement (logementData) et l'état de non-disponibilité (notFound). Ils sont initialement définis sur null et false respectivement.
  const [notFound, setNotFound] = useState(false);

  useEffect(() => { // Récupération des données du logement
    const fetchLogementData = async () => {
      try {
        const response = await fetch('/logements.json');
        const data = await response.json();
        //  récupération des données du logement basée sur l'id (recherche dans le tableau de données)
        const logement = data.find((item) => item.id === id);

        if (logement) {
          setLogementData(logement); // Si le logement est trouvé, les données du logement sont définies dans l'état logementData
        } else {
          setNotFound(true); // Définit l'état notFound à true si le logement n'est pas trouvé
        }
      } catch (error) {
        console.error('An error occurred while fetching logement data:', error);
      }
    };

    fetchLogementData();
  }, [id]);

  if (notFound) {
    return <Navigate to="/404" />;
  }

  if (!logementData) {
    return <div>Loading...</div>;
  }

  const { pictures } = logementData;

  return (
    <div className="logement">
      <Carousel images={pictures} />
      <div className="descriptionBlock">
        <Description
          title={logementData.title}
          location={logementData.location}
          tags={logementData.tags}
        />
        <HostInfo host={logementData.host} rating={logementData.rating} />
      </div>
      <div className="itemLoge">
        <Item title="Description" content={logementData.description} />
        <Item title="Équipements" content={logementData.equipments} />
      </div>
    </div>
  );
};

export default Logement;
