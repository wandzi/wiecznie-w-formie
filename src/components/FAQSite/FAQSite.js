import React from "react"

import myPhoto from '../../images/IMG_8803.jpg'
import './FAQSite.scss'

const FAQSite = () => (
  <section className="faq">
    <h1 className="faq__kicker">Czeka Cię pierwszy trening?</h1>
    <img alt="Me" className="faq__my-photo" src={myPhoto} />
    <ul className="faq__list">

      <li className="list-item">
        <h2>1. Jak przygotować się na pierwszy trening?</h2><br />
        <p>
          Oprócz wygodnego stroju na zmianę, który nie będzie krępował ruchów (konieczne przy diagnostyce), polecam zabrać ze sobą ręcznik
          (szczególnie w obecnej sytuacji epidemiologicznej), wodę oraz ładne skarpetki, bo sporą część diagnostyki przeprowadzimy bez butów.
        </p>
      </li>

      <li className="list-item">
        <h2>2. Jak wygląda pierwsze spotkanie?</h2><br />
        <p>
          Jeśli wcześniej został wypełniony formularz treningowy lub żywieniowy, spotkanie zaczynamy od przeanalizowania odpowiedzi. 
          Sprawdzamy czy coś nie zostało przeoczone i czy nie zostały pominiętejakieś ważne informacje. Pierwszy trening zawsze w dużej mierze 
          związany jest z diagnostyką, analizą słabych ogniw i prognozowaniem treningów na przyszłość. Dlatego na pierwszym spotkaniu dowiesz 
          się również w jakiej kondycji jest Twoje ciało i nad czym będziemy pracować w najbliższej przyszłości.
        </p>
      </li>

      <li className="list-item">
        <h2>3. Co w przypadku spóźnienia?</h2><br />
        <p>
          Jeśli nie byłem wcześniej poinformowany o możliwości spóźnienia, zastrzegam sobie prawo do skrócenia jednostki treningowej o czas, 
          który osoba się spóźniła.
        </p>
      </li>
      <li className="list-item">
        <h2>4. Co w przypadku odwołania jednostki treningowej?</h2><br />
        <p>
          Jeśli zaplanowany trening miał odbyć się w godzinach poranno-południowych (6.00-14.00) istnieje możliwość odwołania treningu do 
          godziny 20.00 dnia poprzedniego bez konsekwencji. Jeśli zostanę poinformowany później, zastrzegam sobie prawo do pobrania opłaty 
          równoznacznej z 80% kwoty odbytego treningu. W przypadku odwołania treningu w godzinach popołudniowych (14.00-22.00), poinformowanie 
          mnie, do 8 godzin przed treningiem, będzie wiązało się z brakiem konsekwencji. W przypadku krótszego czasu, zastrzegam sobie prawo 
          do pobrania opłaty równoznacznej z 80% kwoty odbytego treningu.
        </p>
      </li>
      
      <li className="list-item">
        <h2>5. Czy istnieje możliwość prowadzenia treningu w plenerze?</h2><br />
        <p>
          Jak najbardziej!
        </p>
      </li>

    </ul>

    <p className="faq__note">Ta rubryczka będzie stale powiększana, wraz z zadawanymi przez Was pytaniami.</p>
  </section>
)

export default FAQSite
