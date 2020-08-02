import React from "react"

import myPhoto from '../../images/IMG_8803.jpg'
import './FAQSite.scss'

const FAQSite = () => (
  <section className="faq-site">
    <h1 className="kicker">Czeka Cię pierwszy trening?</h1>
    <img alt="Me" className="my-photo" src={myPhoto} />
  </section>
)

export default FAQSite
