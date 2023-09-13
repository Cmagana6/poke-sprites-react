import React from "react";

export const PokeGridItem = ({ back, front, backShiny, frontShiny, pokeName }) => {

    return (
        <>
            <div className="gridItem">
                <div className="col-6">
                <img src={back} alt="sprite1" />
                <img src={front} alt="sprite2" />
                </div>
                <div className="col-6">
                <img src={backShiny} alt="sprite3" />
                <img src={frontShiny} alt="sprite4" />
                <p>{pokeName}</p>
                </div>
            </div>
        </>
    )
}