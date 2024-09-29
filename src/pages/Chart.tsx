import Header from '../components/Header';
import TONChart from '../components/ChartTON';
import React from 'react';


const Chart: React.FC = () => {
    return <>
        <Header />
        <div>
            <h1 style={{marginTop:"5%", textAlign:"center"}}>График цены TONcoin.</h1>
            <div style={{ marginTop:"1%" }} className='d-flex justify-content-center aligh-items-center'>
                <TONChart />
            </div>
            
        </div>
    </>
};

export default Chart;
