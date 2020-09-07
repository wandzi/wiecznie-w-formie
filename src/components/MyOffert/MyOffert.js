import React from "react"
import myBack from '../../images/IMG_9077-3.jpg'
import './MyOffert.scss'

const MyOffert = () => (
    <section className="offert">
        <h1 className="offert__kicker">Moja oferta</h1>
        <img alt="Me" className="offert__photo" src={myBack} />
        <div className="offert__item">
            <h2 className="offert__kicker">Treningi</h2>
            <ul className="offert__main-list">
                <li className="offert__list-item">
                    <h3 className="offert__item-topic">1. Pierwsze spotkanie - 50 zł</h3> 
                    <p>Zawiera wywiad, badanie diagnostyczne, ustalenie celów oraz prognozowanie ich dokonania</p>
                </li>
                <li className="offert__list-item">
                    <h3 className="offert__item-topic">2. Treningi personalne - pakiety</h3> 
                    <ul className="list">
                        <li>1 trening - 100 zł</li>
                        <li>4 treningi - 330 zł</li>
                        <li>8 treningów - 600 zł</li>
                        <li>12 treningów - 860 zł</li>
                    </ul>
                </li>
                <li className="offert__list-item">
                    <h3 className="offert__item-topic">3. Prowadzenie online:</h3> 
                    <ul className="list">
                        <li>Plan treningowy na okres 6-8 tygodni – 200 zł</li>
                        <li>Każdy kolejny plan treningowy – 150zł</li>
                        <li>Treningi online – 70 zł</li>
                        <li>Analiza aktualnych (nie rozpisanych przeze mnie) planów treningowych – 100 zł</li>
                    </ul>
                </li>
            </ul>  
        </div>

        <div className="offert__item">
            <h2 className="offert__kicker">Żywienie</h2>
            <ul className="offert__main-list">
                <li>
                    <h3 className="offert__item-topic">1. Współpraca zawierająca konsultacje(online), tygodniowy jadłospis, suplementację, korekty w czasie trwania oraz wsparcie:</h3> 
                    <ul className="list">
                        <li>1 miesiąc – 200 zł</li>
                        <li> 2 miesiące – 350 zł</li>
                        <li>3 miesiące - 470 zł</li>
                    </ul>
                </li>
                <li>
                    <h3 className="offert__item-topic">2. Konsultacja żywieniowa – 100 zł</h3> 
                    <p>Wywiad, analiza badań krwi oraz zalecenia</p>
                </li>
                <li>
                    <h3 className="offert__item-topic">3. Wyliczenie zapotrzebowania energetycznego, dostosowanie makroskładników oraz ułożenie jadłospisu:</h3> 
                    <ul className="list">
                        <li>1 dzień – 50 zł</li>
                        <li>3 dni – 100 zł</li>
                        <li>7 dni – 180 zł</li>
                    </ul>
                </li>
                <li>
                    <h3 className="offert__item-topic">4. Suplementacja pod już istniejącą dietę, dostosowana do trybu życia, sportu – 80 zł</h3>
                </li>
            </ul>  
        </div>

        <div className="offert__item">
            <h2 className="offert__kicker">Pakiet</h2>
            <ul className="offert__main-list">
                <li>
                    <h3 className="offert__item-topic">1. Wspólpraca dietetyczna + treningi</h3> 
                    <ul className="list">
                        <li>1 miesiąc + 4 treningi – 500 zł (-30 zł)</li>
                        <li>1 miesiąc + 8 treningów – 750 zł (-50 zł)</li>
                        <li>1 miesiąc + 12 treningów – 960 zł (-100 zł)</li>
                    </ul>
                </li>
                <li>
                    <h3 className="offert__item-topic">2. Współpraca dietetyczna (1 miesiąc) + plan treningowy – 300zł</h3> 
                </li>
            </ul>  
        </div>

    </section>
)

export default MyOffert
