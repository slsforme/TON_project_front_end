import React, { useEffect, useMemo, useState } from "react";
import NightImage from '../images/carousel/night-city.jpg';
import CityImage from '../images/carousel/city-nasdaq.jpg';
import CryptoImage from '../images/carousel/crypto-site.jpg';
import ChartImage from '../images/carousel/TON-chart.jpg';
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { ConnectWalletModal } from "../components/ConnectWalletModal";
import { useSendTransaction } from "../hooks/useSendTransaction";
import { connector } from "../connector";
import { isWalletInfoCurrentlyEmbedded, WalletInfo } from "@tonconnect/sdk";
import { useWallet } from "../hooks/useWallet";

const Home: React.FC = () => {
    const wallet = useWallet();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [sendTransaction, confirmationProgress] = useSendTransaction();

    const [walletsList, setWalletsList] = useState<WalletInfo[] | null>(null);

    useEffect(() => {
        connector.getWallets().then(setWalletsList);
    }, []);

    const embeddedWallet = useMemo(() => walletsList && walletsList.find(isWalletInfoCurrentlyEmbedded), [walletsList]);

    const onConnectClick = () => {
        if (embeddedWallet) {
            connector.connect({jsBridgeKey: embeddedWallet.jsBridgeKey});
        }
        onOpen();
    }


    return (
        <>
            <Header onConnect={onConnectClick} />
            <ConnectWalletModal isOpen={isOpen} onClose={onClose}/>
            <Box>
                {
                    wallet ? <Button onClick={sendTransaction} isLoading={confirmationProgress}>Send tx</Button>
                    : <p>No connection yet</p>
                }
            </Box>
            <main className="w-100 h-100">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner" id="carousel-container">
                        <div className="carousel-item active position-relative">
                            <img src={NightImage} className="d-block w-100 mx-auto" alt="Night" />
                            <div className="carousel-overlay">
                                <h2 className="overlay-text">TON Market</h2>
                                <p className="overlay-text">Получите возможность продавать и покупать ончейн - продукты быстро и без ограничений.</p>
                            </div>
                        </div>
                        <div className="carousel-item position-relative">
                            <img src={CityImage} className="d-block w-100 mx-auto" alt="City" />
                            <div className="carousel-overlay">
                                <h2 className="overlay-text">TON Chart</h2>
                                <p className="overlay-text">Следите, делайте прогнозы на цену TON не перелистывая страницу.</p>
                            </div>
                        </div>
                        <div className="carousel-item position-relative">
                            <img src={CryptoImage} className="d-block w-100 mx-auto" alt="Crypto" />
                            <div className="carousel-overlay">
                                <h2 className="overlay-text">Investments</h2>
                                <p className="overlay-text">Инвестируйте в ончейн - продукты надёжно с самыми низкими комиссиями.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="ton-price-info d-flex align-items-center justify-content-center">
                    <div className="chart-info-block bg-black row ">
                        <div className="chart-photo-container col-6 d-flex align-items-center justify-content-center">
                            <img src={ChartImage} alt="ton-chart" />
                        </div>

                        <div className="name-container col-6 d-flex justify-content-center align-items-center">
                            <div className="text-wrapper">
                                <div className="h3-header d-flex align-items-center">
                                    <h3>Цена TON</h3>
                                </div>

                                <p className="inner-text-graph">TON - криптовалюта, входящая на данный момент в топ 20 монет по капитализации <strong>в мире</strong>.
                                    Следите за её ценой с помощью супер-графиков от <strong>TradingView</strong> не переключая страницы.
                                </p>

                                <NavLink to="/chart">
                                    Просмотреть текущую цену TON
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>


            
            </main>
            <Footer />
        </>
    );
};

export default Home;
