import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ 
    imgsrc,
    title,
    text
}) => {

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card ">
                    <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" width="200" height="300"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
