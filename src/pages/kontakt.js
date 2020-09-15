import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import ContactMe from "../components/ContactMe/ContactMe"

const Contact = () => (
  <Layout>
    <Helmet title="Kontakt | Wiecznie w formie!" defer={false} />
    <ContactMe />
  </Layout>
)

export default Contact
