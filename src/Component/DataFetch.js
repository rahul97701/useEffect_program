import React from "react";
import { useEffect, useState } from "react"



export const DataFetch = () => {
   
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
       
        const fetchData = async () => {
            try {
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=23.1931904&lon=79.9932416&appid=34cc5356368db2acf617ded9a0a22ce7");
            if(!response.ok) {
                throw new Error("Network response wat not OK");
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
    }, []);

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>

    return (
        <div>
        <h1>Data</h1>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <p1>{JSON.stringify(data)}</p1>
        </div>
    )
};