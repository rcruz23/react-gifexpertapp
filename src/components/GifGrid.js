//import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({category}) => {
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p>Loading</p>}
            <div className="card-grid">
                <ol>
                    {
                        images.map(img => (
                            <GifGridItem key={img.id} {...img }/>
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
