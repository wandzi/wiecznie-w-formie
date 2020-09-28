import React, { useState } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import FAQ from '../FAQ/FAQ'
import Img from 'gatsby-image'

import './FAQSite.scss'

const FAQSite = () => {
  
  const [faqs, setFaqs] = useState([
    {
      question: '1. Jak przygotować się na pierwszy trening?',
      answer: `Oprócz wygodnego stroju na zmianę, który nie będzie krępował ruchów (konieczne przy diagnostyce), polecam zabrać ze sobą ręcznik
      (szczególnie w obecnej sytuacji epidemiologicznej), wodę oraz ładne skarpetki, bo sporą część diagnostyki przeprowadzimy bez butów.`,
      open: true
    },  
    {
      question: '2. Jak wygląda pierwsze spotkanie?',
      answer: `Jeśli wcześniej został wypełniony formularz treningowy lub żywieniowy, spotkanie zaczynamy od przeanalizowania odpowiedzi. 
      Sprawdzamy czy coś nie zostało przeoczone i czy nie zostały pominiętejakieś ważne informacje. Pierwszy trening zawsze w dużej mierze 
      związany jest z diagnostyką, analizą słabych ogniw i prognozowaniem treningów na przyszłość. Dlatego na pierwszym spotkaniu dowiesz 
      się również w jakiej kondycji jest Twoje ciało i nad czym będziemy pracować w najbliższej przyszłości.`,
      open: false
    }, 
    {
      question: '3. Co w przypadku spóźnienia?',
      answer: `Jeśli nie byłem wcześniej poinformowany o możliwości spóźnienia, zastrzegam sobie prawo do skrócenia jednostki treningowej o czas, 
      który osoba się spóźniła.`,
      open: false
    }, 
    {
      question: '4. Co w przypadku odwołania jednostki treningowej?',
      answer: `Jeśli zaplanowany trening miał odbyć się w godzinach poranno-południowych (6.00-14.00) istnieje możliwość odwołania treningu do 
      godziny 20.00 dnia poprzedniego bez konsekwencji. Jeśli zostanę poinformowany później, zastrzegam sobie prawo do pobrania opłaty 
      równoznacznej z 80% kwoty odbytego treningu. W przypadku odwołania treningu w godzinach popołudniowych (14.00-22.00), poinformowanie 
      mnie, do 8 godzin przed treningiem, będzie wiązało się z brakiem konsekwencji. W przypadku krótszego czasu, zastrzegam sobie prawo 
      do pobrania opłaty równoznacznej z 80% kwoty odbytego treningu.`,
      open: false
    }, 
    {
      question: '5. Czy istnieje możliwość prowadzenia treningu w plenerze?',
      answer: `Oczywiście! Jak najbardziej! Z wielką przyjemnością, sam ćwiczę od czasu do czasu w plenerze i polecam!`,
      open: false
    }, 
  ])

  const toggleFAQ = (index) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

  const data = useStaticQuery(graphql`
    query FAQSite {
        myPhoto: file(relativePath: {eq: "2.jpg"}) {
            id
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
        }
    }
  `)

  return(
    <section className="faq">
      <h1 className="faq__kicker">Czeka Cię pierwszy trening?</h1>
      <Img
          fixed={data.myPhoto.childImageSharp.fixed}
          className="faq__my-photo"
      />
      <ul className="faq__list">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </ul>
      <p className="faq__note">Ta rubryczka będzie stale powiększana, wraz z zadawanymi przez Was pytaniami.</p>
    </section>
  )
}

export default FAQSite
