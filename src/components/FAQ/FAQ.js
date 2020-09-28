import React from "react"
import './FAQ.scss'

const FAQ = ({ faq, index, toggleFAQ }) => {

    return(
        <li className="list-item" key={index}>
            <h2 className="list-item__faq-question" onClick={() => toggleFAQ(index)}>{faq.question}</h2>
            <p className={"list-item__faq-answer" + (faq.open ? '--open' : '')}>
                {faq.answer}
            </p>
        </li>
    )
}

export default FAQ
