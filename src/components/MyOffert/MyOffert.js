import React from 'react'
import myBack from '../../images/IMG_9077-3.jpg'
import OffertTabs from '../OffertTabs/OffertTabs'
import './MyOffert.scss'

const MyOffert = () => (
    <section className="offert">
        <h1 className="offert__kicker">Moja oferta</h1>
        <img alt="Me" className="offert__photo" src={myBack} />
        
        <OffertTabs />
       
    </section>
)

export default MyOffert
