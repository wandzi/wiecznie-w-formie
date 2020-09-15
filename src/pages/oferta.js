import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import MyOffert from "../components/MyOffert/MyOffert"

const Offert = () => (
  <Layout>
    <Helmet title="Oferta | Wiecznie w formie!" defer={false} />
    <MyOffert />
  </Layout>
)

export default Offert
