import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../styles/market.css'


const Market: React.FC = () => {
    return <>
        <Header />
        <main className="w-100 h-100">
            <h1 style={{ textAlign:"center", fontSize:"xxx-large", marginTop:"5%" }}>Market</h1>
            <h2 style={{ textAlign:"center" }}>Здесь вы можете приобрести желаемые NFT.</h2>
        </main>
        <Footer />
    </>
}

export default Market