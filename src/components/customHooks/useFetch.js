import React from "react";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [apiData, setApiData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((json) => setApiData(json))
    },[])

    return [apiData]
}