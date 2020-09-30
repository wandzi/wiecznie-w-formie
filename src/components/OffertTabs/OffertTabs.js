import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import './OffertTabs.scss'

const OffertTabs = () => {

  const data = useStaticQuery(graphql`
          query Tabs {
              workout: file(relativePath: {eq: "workout.png"}) {
                id
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              diet: file(relativePath: {eq: "diet.png"}) {
                id
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                } 
              }
              package: file(relativePath: {eq: "package.png"}) {
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
    <Tabs>
    <TabList>
      <Tab>Treningi</Tab>
      <Tab>Żywienie</Tab>
      <Tab>Pakiet</Tab>
    </TabList>

    <TabPanel>
      <div className="offert__container">
        <Img
            fixed={data.workout.childImageSharp.fixed}
            className="offert__tab-photo"
        />
        <ul className="offert__main-list">
          <li className="offert__list-item">
            <p className="ofert__paragraph">Treningi personalne przeznaczone są dla osób, które cenią sobie czas. Wybierając trening ze mną, masz gwarancję wykorzystania 
              w pełni czasu spędzonego na siłowni. Nauka techniki wykonywania ćwiczeń, odpowiedni ich dobór, dbanie o bezpieczeństwo 
              i dostosowanie intensywności do możliwości ćwiczącego, to jedne z wielu zalet treningu z trenerem. 
              Więc jeśli zależy Ci na zoptymalizowaniu treningu i wykorzystanie w pełni godzin spędzonych na siłowni… Nie zastanawiaj się. </p>
            <h3 className="offert__item-topic">1. Pierwsze spotkanie - 50 zł</h3> 
            <p>Zawiera wywiad, badanie diagnostyczne, ustalenie celów oraz prognozowanie ich dokonania</p>
          </li>
          <li className="offert__list-item">
            <h3 className="offert__item-topic">2. Trening personalny (możliwość zapłaty za większą ilość treningów w ramach pakietu)</h3> 
            <ul className="list">
                <li>1 trening - 80 zł</li>
            </ul>
          </li>
          <li className="offert__list-item">
              <h3 className="offert__item-topic">3. Prowadzenie online:</h3> 
              <ul className="list">
                  <li>Plan treningowy na okres 6-8 tygodni – 200 zł</li>
                  <li>Każdy kolejny plan treningowy – 150zł</li>
                  <li>Treningi online – 70 zł</li>
              </ul>
          </li>
        </ul> 
      </div>
    </TabPanel>
    <TabPanel>
      <div className="offert__container offert__container--reverse">
        <Img
            fixed={data.diet.childImageSharp.fixed}
            className="offert__tab-photo"
        />
        <ul className="offert__main-list">
          <li>
            <p className="ofert__paragraph">Dieta mylnie kojarzy się z poświęceniem. Oprócz tego, że jest to nieprawda i może być smaczna, prosta oraz syta, 
              to odpowiednio dobrany model żywienia, pomaga zoptymalizować efekty treningu.
            </p>
            <h3 className="offert__item-topic">1. Współpraca zawierająca konsultacje, tygodniowy jadłospis, suplementację, korekty w czasie trwania oraz wsparcie:</h3> 
            <ul className="list">
                <li>1 miesiąc – 169 zł</li>
            </ul>
            <h3 className="offert__item-topic">2. Konsultacja żywieniowa – 79zł</h3> 
          </li>
        </ul>
      </div>  
    </TabPanel>
    <TabPanel>
     <div className="offert__container">
        <Img
            fixed={data.package.childImageSharp.fixed}
            className="offert__tab-photo"
        />
        <div className="tab__package-content">
          <p className="ofert__paragraph">Jeśli należysz do osób, które chcą osiągnąć spodziewane rezultaty jak najszybciej, a do tego zaoszczędzić, to warto zastanowić się nad tym pakietem </p>
          <h3 className="offert__item-topic">Współpraca dietetyczna (1 miesiąc) + plan treningowy – 300zł</h3> 
          <p>Każdy trening trwa pełną godzinę, w przypadku spóźnienia, przy braku możliwości przesunięcia sesji treningowej w czasie, 
            może nastąpić skrócenie treningu. W przypadku zakupu pakietu treningów, nie 
          </p>
        </div>
      </div>
    </TabPanel>
  </Tabs>
  )
}

export default OffertTabs