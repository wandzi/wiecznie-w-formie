import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import OffertTabs from '../OffertTabs/OffertTabs'
import './MyOffert.scss'

const MyOffert = () => {
    
    const data = useStaticQuery(graphql`
          query MyOffert {
              backBackground: file(relativePath: {eq: "5.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 1500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
          }
      `)

    return (
        <section className="offert">
            <h1 className="offert__kicker">Zainteresowany współpracą?</h1>
            <Img
                fluid={data.backBackground.childImageSharp.fluid}
                className="offert__photo"
            />

            <OffertTabs />

        </section>
    )
}

export default MyOffert
