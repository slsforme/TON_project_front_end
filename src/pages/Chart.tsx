import Header from '../components/Header';
import Footer from '../components/Footer'
import TONChart from '../components/ChartTON';
import React from 'react';


const Chart: React.FC = () => {
    return <>
        <Header />
        <main className="w-100 h-100">
            <h1 style={{marginTop:"5%", textAlign:"center"}}>График цены TONcoin.</h1>
            <div style={{ marginTop:"1%" }} className='d-flex justify-content-center aligh-items-center'>
                <TONChart />
            </div>
       
        </main>
        <Footer />
    </>
};

export default Chart;
