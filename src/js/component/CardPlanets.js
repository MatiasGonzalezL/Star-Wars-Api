import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css";


export const CardPlanets = () => {
    const {store, actions} = useContext(Context)
    return(
        <>
    {store.planets.map((planet,idx) => {
    return(
        <div className="card" key={idx}>
            <img src="http://via.placeholder.com/640x360" className="card-img-top" alt="Star-Wars-logo" />
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-light"><Link to={`/PlanetsView/${planet.uid}`}>Learn more!</Link></a><i onClick={() =>{actions.addFavorite(planet.name);}} className="fa fa-heart" id="corazon"/>
            </div>
        </div>
    );
})}
        </>
    )
}
