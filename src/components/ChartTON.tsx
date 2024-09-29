import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';   
import { createChart } from 'lightweight-charts';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт Bootstrap CSS

interface TONData {
    symbol: string;
    open: number;
    high: number; 
    low: number;
    close: number;
    volume: number;
}

const fetchData = async (url: string): Promise<{ "price-data": string } | undefined> => {
    try {
        const response = await axios.get<{ "price-data": string }>(url);
        return response.data; 
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return undefined;
    }
};

const TONChart: React.FC = () => {
    const [data, setData] = useState<TONData[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true); // Состояние для загрузки
    const chartContainerRef = useRef<HTMLDivElement | null>(null);
    const url = "http://127.0.0.1:8000/ton-price/";

    useEffect(() => {
        const fetchDataAsync = async () => {
            const result = await fetchData(url);
            if (result && result["price-data"]) {
                const parsedData: TONData[] = JSON.parse(result["price-data"]);
                setData(parsedData);
            }
            setLoading(false); // Устанавливаем состояние загрузки в false после получения данных
        };

        fetchDataAsync();
    }, [url]);

    useEffect(() => {
        if (data && chartContainerRef.current) {
            const chart = createChart(chartContainerRef.current, {
                width: chartContainerRef.current.clientWidth,
                height: chartContainerRef.current.clientHeight,
                layout: {
                    background: {
                        color: '#ffffff'
                    }
                }
            });

            const candleSeries = chart.addCandlestickSeries({
                upColor: '#ffffff',
                borderUpColor: '#000000',
                wickUpColor: '#ffffff',
                downColor: '#000000',
                borderDownColor: '#000000',
                wickDownColor: '#000000',
            });

            const currentDate = new Date();

            const chartData = data.map((item, index) => {
                const date = new Date(currentDate);
                date.setDate(currentDate.getDate() - (data.length - 1 - index)); 

                return {
                    time: Math.floor(date.getTime() / 1000), 
                    open: item.open,
                    high: item.high,
                    low: item.low,
                    close: item.close,
                };
            });

            chartData.sort((a, b) => a.time - b.time);

            candleSeries.setData(chartData);

            return () => {
                chart.remove();
            };
        }
    }, [data]);

    return (
        <div style={{ position: 'relative', width: '1000px', height: '600px' }}>
            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                </div>
            )}
            <div ref={chartContainerRef} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default TONChart;
