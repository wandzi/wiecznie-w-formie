import React from "react"

import HeroPage from '../components/HeroPage/HeroPage.js'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona główna" />
    <HeroPage />
  </Layout>
)

export default IndexPage
