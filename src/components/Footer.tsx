import React  from "react"
import '../styles/footer.css'

const Footer: React.FC = () => {

    return <> <footer className="container-fluid bg-grey py-5">
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="row">
                <div className="col-md-6 ">
                    <div className="logo-part">
                        <p>г. Москва. 2024 год.</p>
                        <p><a href="https://github.com/slsforme">Github</a> <a href="https://t.me/slsforme">Telegram</a></p>
                    </div>
                </div>
                <div className="col-md-6 px-4">
                    <h6> О нас</h6>
                    <p> Лучшие на рынке продажи NFT.</p>
                    <a href="#" className="btn-footer"> More info </a>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                <div className="col-md-6 px-4">
                    <h6> Меню</h6>
                    <div className="row ">
                        <div className="col-md-6">
                            <ul>
                            <li> <a href="#"> Основная страница</a> </li>
                            <li> <a href="#"> FAQ</a> </li>
                            <li> <a href="#"> Маркет</a> </li>
                            <li> <a href="#"> Помощь</a> </li>
                            <li> <a href="#"> Авторизация</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <h6> TON Market.</h6>
                    <p>Инновация в мире продажи NFT.</p>
                </div>
                </div>
            </div>
        </div>
        </div>
        </footer>
    </>
}

export default Footer;