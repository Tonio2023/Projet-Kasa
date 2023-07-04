import React from "react";
import './Home.css'
import Headliner from '../../components/Headliner/Headliner.js';
import Section from "../../components/Section/Section.js";
import Homeimg from "../../img/Home-img.jpg"

export default function Home() {
    //pour réaliser le retour à la ligne sur la version mobile dans le composant Headliner 
  const addLineBreak = (text) => {
    return text.replace(",", ",\n"); //fonction addLineBreak est appelée pour modifier le contenu du paragraphe et ajouter des retours à la ligne après les virgules.
  };

  const paragraphContent = "Chez vous, partout et ailleurs";
  const modifiedParagraphContent = addLineBreak(paragraphContent);

  return (
    <div className="home">
      <Headliner className='homeHeadCard' image={Homeimg} title={modifiedParagraphContent} />
      <Section />
    </div>
  );
}
