import React, { useEffect, useState } from 'react';
import axios from 'axios';   

const fetchData = (url: string) => {
    axios.get(url)
    .then(response => {
        const data = response.data; 
        console.log(data); 
        return data;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

const TONChart: React.FC = () => {

    const url = "http://127.0.0.1:8000/ton-price/";

    const data = fetchData(url);


    return <>
    
    </>
};

export default TONChart;
