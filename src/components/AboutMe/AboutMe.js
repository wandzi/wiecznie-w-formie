import React from "react"

import myPhoto from '../../images/me.jpeg'
import myChest from '../../images/IMG_9020.jpg'
import myBiceps from '../../images/IMG_8800.jpg'
import './AboutMe.scss'


const AboutMe = () => (
    <section className="about-me">
        <img alt="Me" className="my-photo" src={myPhoto} />
        <h1 className="hello">Cześć!</h1>
        <div className="description-about-me">
            <p>Miło że zawitałeś na mojej stronie, dlatego chciałbym żebyś czegoś się o mnie dowiedział!</p>

            <p>
                Nazywam się Adam Dąbrowski, a sport od zawsze zajmował sporą część mojego życia. 
                Nigdy nie zdarzyło mi się rywalizować na najwyższych szczeblach, 
                za to próbowałem swoich sił w wielu dyscyplinach sportowych, z których zawsze wyciągałem wiedzę, 
                jak być lepszą wersją samego siebie, ruszać się lepiej i cieszyć się życiem bez bólu i kontuzji.
            </p>

            <p>
                Podczas treningów i edukacji, najwięcej uwagi poświęciłem treningowi z masą własnego ciała– czyli kalistenice. 
                To dzięki niej zafascynowałem się zdolnościami ludzkiego ciała, jego kontrolą i harmonią, w połączeniu z ponad przeciętną 
                siłą i świetną sylwetką. W międzyczasie moje zainteresowanie kierowało się ku dyscyplinom tj. kulturystyka, 
                trójbój siłowy, dwubój olimpijski, wspinaczka, akrobatyka, gimnastyka, pływanie i wiele innych, wliczając w to sporty 
                drużynowe i sezonowe.
            </p>
            <img alt="My chest" className="my-chest" src={myChest} />
            <p>
                Aktualnie jestem na końcówce studiów magisterskich na kierunku Trener osobisty z Dietetyką Sportową, na Katowickim Awfie. 
                Podczas trwania studiów ukończyłem wiele dodatkowych kursów, w tym instruktor sportów siłowych, kalisteniki, 
                czy o programowaniu treningu sportowego.
            </p>
            
            <p>
                Łącząc wiedzę praktyczną, zdobytą podczas wielu lat treningów, z teoretyczną, staram się w sposób kompleksowy podejść 
                do każdego klienta, żeby przybliżyć go do osiągnięcia zamierzonych celów. Trenerem jestem od 4 lat i mam nadzieję, 
                że podczas kolejnych lat zdobędę Twoje zaufanie! <span role="img" aria-label="Smile">😊</span>
            </p>
            <img alt="My biceps" className="my-biceps" src={myBiceps} />
        </div>

    </section>  
)

export default AboutMe
