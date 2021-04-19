//import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]);




    const {data} = useFetchGifs(category);
    

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                <ol>
                    {
                        data.map(img => (
                            <GifGridItem key={img.id} {...img }/>
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
