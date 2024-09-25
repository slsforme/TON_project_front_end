import Header from '../components/Header';
import TONChart from '../components/ChartTON';
import React from 'react';


const Chart: React.FC = () => {
    

    return <>
        <Header />
        <div>
            <h1>График с использованием Lightweight Charts</h1>
            <TONChart />
        </div>
    </>
};

export default Chart;
