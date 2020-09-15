import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import BlogSite from "../components/BlogSite/BlogSite"

const Blog = () => (
  <Layout>
    <Helmet title="Blog | Wiecznie w formie!" defer={false} />
    <BlogSite />
  </Layout>
)

export default Blog
