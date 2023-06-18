import React from "react";
import './Home.css'
import Headliner from '../../components/Headliner/Headliner.js';
import Section from "../../components/Section/Section.js";
import Homeimg from "../../img/Home-img.jpg"

export default function Home() {
    return (
        <div className="home">
            <Headliner image={Homeimg} title="Chez vous, partout et ailleurs"/>
            <Section />
        </div>
    )
}