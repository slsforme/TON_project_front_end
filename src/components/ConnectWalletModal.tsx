import { 
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Flex,
    Button,
    Image
 } from "@chakra-ui/react";
import { FunctionComponent, useState, useEffect } from "react";
import { connector } from "../connector";
import {isWalletInfoCurrentlyInjected, isWalletInfoRemote, WalletInfo, WalletInfoRemote} from "@tonconnect/sdk"
import { QRCodeModal } from "./QRCodeModal";
import { useWallet } from "../hooks/useWallet";


export const ConnectWalletModal: FunctionComponent<{isOpen: boolean, onClose: () => void}> = ({isOpen, onClose}) => {
   const [walletsList, setWalletsList] = useState<WalletInfo[] | null>(null);
   const [selectedWalletInfo, setSelectedWalletInfo] = useState<WalletInfoRemote | null>(null);

    const wallet = useWallet();
    
    useEffect(() => {
        if(isOpen && wallet) {
            onClose();
        }
    }, [isOpen, wallet, onClose]);

    useEffect(() => {
        connector.getWallets().then(setWalletsList);
    }, []);

    const onWalletClick = (walletInfo: WalletInfo) => {
        if (isWalletInfoRemote(walletInfo)) {
            return setSelectedWalletInfo(walletInfo);
        }

        if(isWalletInfoCurrentlyInjected(walletInfo)) {
            connector.connect({jsBridgeKey: walletInfo.jsBridgeKey});
        } 

        window.open(walletInfo.aboutUrl, '_blank');
    }

   return <>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalCloseButton/>
            <ModalHeader>Choose a wallet</ModalHeader>
            <ModalBody>
                {
                    !!walletsList && <Flex gap="2" flexWrap="wrap">{
                        walletsList.map(walletInfo => 
                        <Button onClick={() => onWalletClick(walletInfo)} leftIcon={<Image w="16px" h="16px" src={walletInfo.imageUrl}/>} key={walletInfo.name}>{walletInfo.name}</Button>)
                        }</Flex>
                }
            </ModalBody>
        </ModalContent>
        </Modal>
        <QRCodeModal isOpen={!!selectedWalletInfo} onClose={() => setSelectedWalletInfo(null)} walletInfo={selectedWalletInfo}/>
        
    </>
}