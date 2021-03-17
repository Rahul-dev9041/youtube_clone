import React from 'react';
import './Recommend.css';


function Recommend(props) {
    return (
        <>
        <div className="bodyw">
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="Images"/>
                <h4>{props.name}</h4>
                <h5>{props.views}</h5>
            </div>
        </div>
        </div>
        </>
    )
}
   
export default Recommend;