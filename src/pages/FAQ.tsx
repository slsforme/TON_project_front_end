import React from "react"
import Header from "../components/Header"
import '../styles/faq.css';


const FAQ: React.FC = () => {
    return <>
    <Header />
        <div>
            <h1 style={{ marginTop:'5%',  textAlign:'center'}}>Самые частозадаваем вопросы.</h1>
            <div style={{ marginTop:'2%', marginLeft:'15%', textAlign:'justify', marginRight:'15%'}}>
                <ul>
                    <li><h2>Что такое криптовалюта TON?</h2></li>
                    <li><p>TON (Telegram Open Network) — это блокчейн-платформа, разработанная командой Telegram. Она предлагает высокую скорость транзакций, низкие комиссии и возможность создания децентрализованных приложений (dApps). TON нацелен на создание экосистемы для хранения и передачи ценностей.</p></li>
                    <li><h2>Как можно приобрести TON?</h2></li>
                    <li><p>TON можно приобрести на различных криптовалютных биржах. Обычно процесс включает регистрацию на бирже, верификацию аккаунта, депозит средств (например, фиатной валюты или других криптовалют) и покупку TON на платформе.</p></li>
                    <li><h2>Что такое NFT? Как они реализованы в блокчейне TON?</h2></li>
                    <li><p>NFT (невзаимозаменяемые токены) — это уникальные цифровые активы, которые представляют собой право собственности на определённые объекты, такие как искусство, музыка или игровые предметы. На платформе TON также можно создавать и торговать NFT, используя возможности блокчейна для обеспечения уникальности и прозрачности транзакций.</p></li>
                    <li>
                        <h2>Как создать NFT на платформе TON?</h2>
                    </li>
                    <li>
                        <p>Чтобы создать NFT на TON, пользователи могут использовать специальные смарт-контракты, которые позволяют создавать, управлять и обменивать NFT. Для этого необходимо иметь криптовалюту TON, выбрать платформу для создания NFT и следовать инструкциям по загрузке цифрового контента и созданию токена.
                        </p>
                    </li>
                    <li>
                        <h2>Как защитить свои NFT и криптовалюту на TON?</h2>
                    </li>
                    <li>
                        <p>Для защиты своих NFT и криптовалюты важно использовать надежные кошельки, активировать двухфакторную аутентификацию, быть осторожными с фишингом и всегда хранить приватные ключи в безопасности. Рекомендуется также следить за обновлениями безопасности и использовать только проверенные платформы для торговли и хранения своих активов.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default FAQ;