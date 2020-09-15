import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './OffertTabs.scss'

const OffertTabs = () => (
  <Tabs>
    <TabList>
      <Tab><h1>Treningi</h1></Tab>
      <Tab><h1>Żywienie</h1></Tab>
      <Tab><h1>Pakiet</h1></Tab>
    </TabList>

    <TabPanel>
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
    </TabPanel>
    <TabPanel>
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
    </TabPanel>
    <TabPanel>
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
    </TabPanel>
  </Tabs>
);

export default OffertTabs