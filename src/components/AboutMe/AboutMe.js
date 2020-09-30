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
                  fixed(base64Width: 3080, quality: 100){
                    ...GatsbyImageSharpFixed
                  }
                }
            }
            myChest: file(relativePath: {eq: "3.jpg"}) {
                id
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
            myBiceps: file(relativePath: {eq: "1.jpg"}) {
                id
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
            myBack: file(relativePath: {eq: "4.jpg"}) {
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
            <h1 className="about-me__hello">Siemka!</h1>
            <div className="about-me__description">
                <p className="about-me__hero-title">Skoro już tu jesteś, to przeczytaj parę słów o mnie!</p>

                <div className="about-me__container">
                    <div className="about-me__description_paraghraph">
                        <p>
                            Sport od zawsze był ważną częścią mojego życia. Próbowałem wielu dyscyplin sportowych,
                            jednak najwięcej czasu poświęciłem kalistenice i szeroko pojętemu treningowi siłowemu.

                        </p>

                        <p>
                            W 2015 roku rozpocząłem naukę na Akademii Wychowania Fizycznego w Katowicach, gdzie uzyskałem wykształcenie wyższe.
                            Aktualnie kontynuuje kształcenie na studiach magisterskich na kierunku Trener Osobisty z Dietetyką Sportową.
                            W trakcie kształcenia akademickiego uczęszczałem również na wiele kursów poszerzając swoją wiedzę na temat treningu
                            i możliwości ciała ludzkiego. Posiadam tytuł Trenera Przygotowania Motorycznego oraz dietetyka sportowego.
                        </p>
                    </div>
                    <Img
                        fixed={data.myChest.childImageSharp.fixed}
                        className="my-chest"
                    />
                </div>

                <div className="about-me__container">
                    <div className="about-me__description_paraghraph">
                        <p>
                            Łącząc zdobytą wiedzę teoretyczną z długoletnią praktyką, jestem w stanie świadczyć usługi trenerskie oraz 
                            dietetyczne na najwyższym poziomie. W pracy cenię sobie indywidualne podejście, dokładność oraz profesjonalizm. 
                            Treningi prowadzone są w oparciu o obszerny wywiad oraz przeprowadzoną wcześniej diagnostykę, co pozwala na 
                            świadome, bezpieczne i efektowne prowadzenie treningów. 
                        </p>

                        <p>
                            Stale się kształcę i poszerzam swoje kompetencję w oparciu o najnowsze badania naukowe, dzięki czemu masz pewność,
                             będziesz prowadzony w najlepszy możliwy sposób.
                        </p>
                        
                    </div>
                    <Img
                        fixed={data.myBiceps.childImageSharp.fixed}
                        className="my-biceps"
                    />
                    
                </div>

                <div className="about-me__container">
                    <div className="about-me__specialization-list">
                        <h1 className="about-me__list-heading">Moje specjalizacje:</h1>
                        <ul>
                            <li className="about-me__list-item">Kalistenika</li>
                            <li className="about-me__list-item">Trening siłowy</li>
                            <li className="about-me__list-item">Przygotowanie motoryczne</li>
                            <li className="about-me__list-item">Trening funkcjonalny</li>
                            <li className="about-me__list-item">Dietetyka sportowa</li>
                        </ul>
                    </div>
                    <Img
                        fixed={data.myBack.childImageSharp.fixed}
                        className="my-biceps"
                    />
                </div>
            </div>
        </section>
    )
}




export default AboutMe
