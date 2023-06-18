import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Logement.css'
import Carousel from '../../components/Carousel/Carousel';
import Description from '../../components/Description/Description';

const Logement = () => {
  const { id } = useParams();
  const [logementData, setLogementData] = useState(null);

  useEffect(() => {
    const fetchLogementData = async () => {
      try {
        const response = await fetch('/logements.json');
        const data = await response.json();
        // Retrieve specific logement data based on ID or other criteria
        const logement = data.find((item) => item.id === id);
        setLogementData(logement);
      } catch (error) {
        console.error('An error occurred while fetching logement data:', error);
      }
    };

    fetchLogementData();
  }, []);

  if (!logementData) {
    return <div>Loading...</div>;
  }
  const { pictures } = logementData
  return (
    <div className="logement">
        <Carousel images={pictures} />
        <Description
          title={logementData.title}
          location={logementData.location}
          tags={logementData.tags}
        />
    </div>
  );
};

export default Logement;
