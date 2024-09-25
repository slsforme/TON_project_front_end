import React from 'react';

import { TonConnectButton } from '@tonconnect/ui-react'
import { NavLink } from 'react-router-dom';



const Header: React.FC = () => {
    return <>
    <header>

        <div className="d-flex justify-content-between align-items-center bg-white">
            <div className="d-flex justify-content-center flex-grow-1">
                <ul>
                    <li><NavLink to="/home">Главная страница</NavLink></li>
                    <li><NavLink to="/market">Маркет</NavLink></li>
                    <li><NavLink to="/FAQ">FAQ</NavLink></li>
                    <li><NavLink to="/auth">Авторизация</NavLink></li>
                </ul>
            </div>
            <TonConnectButton />
        </div>
    </header>
    </>
};

export default Header;