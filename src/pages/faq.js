import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import FAQSite from "../components/FAQSite/FAQSite"

const FAQ = () => (
  <Layout>
    <Helmet title="FAQ | Wiecznie w formie!" defer={false} />
    <FAQSite />
  </Layout>
)

export default FAQ
