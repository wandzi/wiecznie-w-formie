import React from "react"

import Video from '../components/Video/Video.js'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Video />
  </Layout>
)

export default IndexPage
