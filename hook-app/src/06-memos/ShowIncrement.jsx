/* eslint-disable react/display-name */
import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {

    console.log("ve volvi a generar :(");

    return (
        <button className="btn btn-primary" onClick={() => increment(5)} >
            Incrementar
        </button>
    )
});

