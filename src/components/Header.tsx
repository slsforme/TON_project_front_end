import React, { FunctionComponent } from 'react';

import { TonConnectButton, toUserFriendlyAddress } from '@tonconnect/ui-react'
import { NavLink } from 'react-router-dom';
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, useClipboard } from '@chakra-ui/react';
import { useWallet } from '../hooks/useWallet';
import { connector } from '../connector';



const Header: FunctionComponent<{ onConnect: () => void }> = ({ onConnect }) => {
    
    const wallet = useWallet();

    const userFriendlyAddress = wallet ? toUserFriendlyAddress(wallet.account.address) : '';
    const sliceUserFriendlyAddress = userFriendlyAddress.slice(0, 4) + '…' + userFriendlyAddress.slice(-4);

    const {onCopy, hasCopied} =  useClipboard(userFriendlyAddress);

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
            <Box>
                {
                    wallet ? <Menu>
                        <MenuButton as={Button}>{sliceUserFriendlyAddress}</MenuButton>
                        <MenuList>
                            <MenuItem closeOnSelect={false} onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy Address'}</MenuItem>
                            <MenuItem onClick={() => connector.disconnect()}>Disconnect</MenuItem>
                        </MenuList>
                    </Menu> : <Button onClick={onConnect}>Connect Wallet</Button>
                }
            </Box>
        </div>
    </header>
    </>
};

export default Header;