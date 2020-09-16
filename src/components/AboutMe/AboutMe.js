import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './AboutMe.scss'


const AboutMe = () => {

    const data = useStaticQuery(graphql`
        query AboutMe {
            myImage: file(relativePath: {eq: "me.jpeg"}) {
                id
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
            myChest: file(relativePath: {eq: "IMG_9020.jpg"}) {
                id
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
            myBiceps: file(relativePath: {eq: "IMG_8800.jpg"}) {
                id
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
        }
    `)

    return (
        <section className="about-me">
            <Img
                fixed={data.myImage.childImageSharp.fixed}
                className="my-photo"
            />
            <h1 className="hello">Cześć!</h1>
            <div className="about-me__description">
                <p>Miło że zawitałeś na mojej stronie, dlatego chciałbym żebyś czegoś się o mnie dowiedział!</p>

                <div className="about-me__container">
                    <div className="about-me__description_paraghraph">
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
                    </div>
                    <Img
                        fixed={data.myChest.childImageSharp.fixed}
                        className="my-chest"
                    />
                </div>

                <div className="about-me__container">
                    <div className="about-me__description_paraghraph-last">
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
                    </div>
                    <Img
                        fixed={data.myBiceps.childImageSharp.fixed}
                        className="my-biceps"
                    />
                </div>
            </div>

        </section>
    )
}




export default AboutMe
