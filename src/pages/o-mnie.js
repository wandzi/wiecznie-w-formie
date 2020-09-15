import React from "react"
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"
import AboutMe from "../components/AboutMe/AboutMe"

const About = () => (
  <Layout>
    <Helmet title="O mnie | Wiecznie w formie!" defer={false} />
    <AboutMe />
  </Layout>
)

export default About
