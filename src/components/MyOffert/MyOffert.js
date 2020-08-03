import React from "react"

import './MyOffert.scss'

const MyOffert = () => (
    <section className="offert">
        <div className="offert__item">
            <h2 className="offert__kicker">Treningi</h2>
            <ul className="offert__main--list">
                <li className="offert__list-item">
                    <h3 className="offert__item-topic">1. Pierwsze spotkanie - 50 zł</h3> 
                    <p>Zawiera wywiad, badanie diagnostyczne, ustalenie celów oraz prognozowanie ich dokonania</p>
                </li>
                <li>
                    <h3 className="offert__item-topic">2. Treningi personalne - pakiety</h3> 
                    <ul>
                        <li>1 trening - 100 zł</li>
                        <li>4 treningi - 330 zł</li>
                        <li>8 treningów - 600 zł</li>
                        <li>12 treningów - 860 zł</li>
                    </ul>
                </li>
                <li>
                    <h3 className="offert__item-topic">3. Prowadzenie online:</h3> 
                    <ul>
                        <li>Plan treningowy na okres 6-8 tygodni – 200 zł</li>
                        <li>Każdy kolejny plan treningowy – 150zł</li>
                        <li>Treningi online – 70 zł</li>
                        <li>Analiza aktualnych (nie rozpisanych przeze mnie) planów treningowych – 100 zł</li>
                    </ul>
                </li>
            </ul>  
            <h2 className="offert__kicker">Żywienie</h2>
            <ul>
            </ul>  
        </div>
    </section>
)

export default MyOffert
